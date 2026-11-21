"""Regression check (Session 69): WebGL fragment shaders must not rely on bare mediump.

On GPUs where mediump is real fp16 (NVIDIA via ANGLE/GLES), pixel-space math overflowed
65504 -> inf -> NaN and painted a black wedge over the Pixel Twin face in Chromium.
Run: python3 -I tools/check_shaders.py  (exit 1 on failure)
"""
import pathlib, re, sys

root = pathlib.Path(__file__).resolve().parent.parent
NL = r'(?:\\n|\s)+'
GUARD = (r'#ifdef\s+GL_FRAGMENT_PRECISION_HIGH' + NL + r'precision\s+highp\s+float\s*;' + NL +
         r'#else' + NL + r'precision\s+mediump\s+float$')
bad = []
for f in sorted(list(root.glob('*.html')) + list(root.glob('*.js')) + list(root.glob('anatomy/*.js'))):
    s = f.read_text(encoding='utf-8')
    for m in re.finditer(r'precision\s+mediump\s+float', s):
        # mediump is only allowed as the #else fallback of: #ifdef GL_FRAGMENT_PRECISION_HIGH / precision highp float
        # (newlines may be real or the JS escape \n inside a shader string)
        ctx = s[max(0, m.start() - 200):m.end()]
        if not re.search(GUARD, ctx):
            bad.append(f"{f.name}:{s.count(chr(10), 0, m.start()) + 1} 'precision mediump float' not guarded by #ifdef GL_FRAGMENT_PRECISION_HIGH/highp")
    # mediump fallback: the CRT noise hash must get a bounded input. rnd(uv*res+time) reaches ~1e5 in pixel space,
    # sin(dot(p,..)) overflows fp16 (65504) -> NaN -> black wedge. Every GLSL rnd(...) call must start with mod(...).
    if f.suffix == '.html':
        for m in re.finditer(r'(?<![\w.])rnd\(', s):
            if s[m.start() - 6:m.start()] == 'float ':
                continue  # the definition float rnd(vec2 p)
            if not s.startswith('mod(', m.end()):
                bad.append(f"{f.name}:{s.count(chr(10), 0, m.start()) + 1} shader rnd() input not bounded with mod(...)")
print('\n'.join(bad) or 'shader precision: OK')
sys.exit(1 if bad else 0)
