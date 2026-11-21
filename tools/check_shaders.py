"""Regression check (Session 69): WebGL fragment shaders must not rely on bare mediump.

On GPUs where mediump is real fp16 (NVIDIA via ANGLE/GLES), pixel-space math overflowed
65504 -> inf -> NaN and painted a black wedge over the Pixel Twin face in Chromium.
Run: python3 -I tools/check_shaders.py  (exit 1 on failure)
"""
import pathlib, re, sys

root = pathlib.Path(__file__).resolve().parent.parent
bad = []
for f in sorted(list(root.glob('*.html')) + list(root.glob('*.js')) + list(root.glob('anatomy/*.js'))):
    s = f.read_text(encoding='utf-8')
    for m in re.finditer(r'precision\s+mediump\s+float', s):
        ctx = s[max(0, m.start() - 160):m.start()]
        if 'GL_FRAGMENT_PRECISION_HIGH' not in ctx:
            bad.append(f"{f.name}:{s.count(chr(10), 0, m.start()) + 1} bare 'precision mediump float'")
print('\n'.join(bad) or 'shader precision: OK')
sys.exit(1 if bad else 0)
