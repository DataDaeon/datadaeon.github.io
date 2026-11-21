"""Regression check (Session 69): the CRT shader must not overflow mediump.

On GPUs where mediump is real fp16 (NVIDIA via ANGLE/GLES) pixel-space math overflowed 65504 -> inf -> NaN and
painted a black wedge over the Pixel Twin face in Chromium. WebGL1 mediump only guarantees +-16384.
Rules:
  1. every `precision mediump float` is the #else of `#ifdef GL_FRAGMENT_PRECISION_HIGH` / `precision highp float`;
  2. the film-grain hash rnd(...) only runs inside `#ifdef CRT_GRAIN`, and CRT_GRAIN is defined only in the highp branch;
  3. the `time` uniform is wrapped (% N) in JS before it reaches the shader.
Run: python3 -I tools/check_shaders.py [root]   (exit 1 on failure)
"""
import pathlib, re, sys

root = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else pathlib.Path(__file__).resolve().parent.parent
NL = r'(?:\\n|\s)+'  # real newline or the JS escape \n inside a shader string
GUARD = (r'#ifdef\s+GL_FRAGMENT_PRECISION_HIGH' + NL + r'precision\s+highp\s+float\s*;' + NL +
         r'(?:#define\s+CRT_GRAIN\s+1' + NL + r')?#else' + NL + r'precision\s+mediump\s+float$')
HIGHP_GRAIN = (r'#ifdef\s+GL_FRAGMENT_PRECISION_HIGH' + NL + r'precision\s+highp\s+float\s*;' + NL +
               r'#define\s+CRT_GRAIN\s+1' + NL + r'#else')


def line(s, i):
    return s.count('\n', 0, i) + 1


bad = []
for f in sorted(list(root.glob('*.html')) + list(root.glob('*.js')) + list(root.glob('anatomy/*.js'))):
    s = f.read_text(encoding='utf-8')
    for m in re.finditer(r'precision\s+mediump\s+float', s):
        if not re.search(GUARD, s[max(0, m.start() - 240):m.end()]):
            bad.append(f"{f.name}:{line(s, m.start())} 'precision mediump float' not the #else of #ifdef GL_FRAGMENT_PRECISION_HIGH/highp")
    if f.suffix != '.html':
        continue
    defines = [m.start() for m in re.finditer(r'#define\s+CRT_GRAIN', s)]
    for d in defines:
        if not re.search(HIGHP_GRAIN, s[max(0, d - 160):d + 80]):
            bad.append(f"{f.name}:{line(s, d)} CRT_GRAIN defined outside the highp branch")
    for m in re.finditer(r'(?<![\w.])rnd\(', s):
        if s[m.start() - 6:m.start()] == 'float ':
            continue  # the definition float rnd(vec2 p)
        before = s[:m.start()]
        opened, closed = before.rfind('#ifdef CRT_GRAIN'), before.rfind('#endif')
        if not defines or opened < 0 or closed > opened:
            bad.append(f"{f.name}:{line(s, m.start())} grain rnd() runs outside #ifdef CRT_GRAIN (mediump overflow)")
    for m in re.finditer(r'uniform1f\(\s*uTime\s*,([^;]*)\)', s):
        if '%' not in m.group(1):
            bad.append(f"{f.name}:{line(s, m.start())} time uniform not wrapped (% N): time*7. overflows mediump")
print('\n'.join(bad) or 'shader precision: OK')
sys.exit(1 if bad else 0)
