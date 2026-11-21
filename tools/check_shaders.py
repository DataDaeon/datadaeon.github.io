"""Regression check (Session 69): the CRT shader must not overflow mediump.

On GPUs where mediump is real fp16 (NVIDIA via ANGLE/GLES) pixel-space math overflowed 65504 -> inf -> NaN and
painted a black wedge over the Pixel Twin face in Chromium. WebGL1 mediump only guarantees +-16384.

The safe lines were verified by eye in headed Chromium on the real GPU (highp path and forced mediump path).
Instead of guessing at equivalent rewrites, this check pins them: each must appear exactly once in index.html,
and no other precision / CRT_GRAIN / rnd() / uTime code may appear. Changing them on purpose means re-verifying
in Chromium (see CHANGELOG Session 69) and then updating PINNED below.
Run: python3 -I tools/check_shaders.py [root]   (exit 1 on failure)
"""
import pathlib, re, sys

root = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else pathlib.Path(__file__).resolve().parent.parent

PINNED = {
    # highp when available; CRT_GRAIN (the hash * 43758) exists only in the highp branch
    'precision header': r"'#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#define CRT_GRAIN 1\n#else\n"
                        r"precision mediump float;\n#endif\n",
    # grain: guarded, input bounded before time is added
    'grain block': "    '#ifdef CRT_GRAIN',\n"
                   "    ' col+=(rnd(mod(uv*res,256.)+fract(time))-.5)*.045;',\n"
                   "    '#endif',\n",
    # time wrapped in JS: 600 * 7 = 4200 < 16384, and never NaN
    'time uniform': "gl.uniform1f(uTime, rm ? 0 : ((now - t0) / 1000) % 600);",
}
# patterns that may only occur inside the pinned text (count must equal the count inside PINNED)
ONLY_PINNED = {
    'precision mediump': r'precision\s+mediump',
    'CRT_GRAIN define': r'#\s*define\s+CRT_GRAIN',
    '#ifdef CRT_GRAIN': r'#\s*if(?:def)?\s+(?:defined\s*\(\s*)?CRT_GRAIN',
    'rnd() call': r'(?<![\w.])rnd\((?!vec2)',
    'uTime set': r'uniform1f\(\s*uTime',
}

bad = []
idx = root / 'index.html'
if not idx.is_file():
    print(f'no index.html under {root}: nothing to check')
    sys.exit(1)
s = idx.read_text(encoding='utf-8')
for name, text in PINNED.items():
    n = s.count(text)
    if n != 1:
        bad.append(f'index.html: pinned {name} found {n}x (expected 1) — re-verify in Chromium before changing')
pinned_all = ''.join(PINNED.values())
for name, pat in ONLY_PINNED.items():
    want, got = len(re.findall(pat, pinned_all)), len(re.findall(pat, s))
    if got != want:
        bad.append(f'index.html: {name} appears {got}x, expected {want}x (only in the pinned lines)')
for f in sorted(list(root.glob('*.js')) + list(root.glob('anatomy/*.js')) + [p for p in root.glob('*.html') if p != idx]):
    t = f.read_text(encoding='utf-8')
    for m in re.finditer(r'precision\s+mediump\s+float', t):
        bad.append(f"{f.name}:{t.count(chr(10), 0, m.start()) + 1} 'precision mediump float' outside the pinned CRT shader")
print('\n'.join(bad) or 'shader precision: OK')
sys.exit(1 if bad else 0)
