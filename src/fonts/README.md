# Fonts

Self-hosted, subset versions of:

- **Bricolage Grotesque** (variable, SIL OFL 1.1) – axes `wght` 400–800 and `wdth` 78–100, `opsz` pinned to 48
- **Kalam** Regular + Bold (SIL OFL 1.1)

Subset to Basic Latin, the Latin-1 letters used in Czech/Slovak and the Czech/Slovak letters (č ď ě ň ř š ť ů ž ľ ĺ ŕ) plus common punctuation
(– — „ “ ‚ ‘ … • € →). If you add text with other characters (e.g. Polish/German-only letters), regenerate:

```bash
pip install fonttools brotli
fonttools varLib.instancer "BricolageGrotesque[opsz,wdth,wght].ttf" wght=400:800 wdth=78:100 opsz=48 -o bg.ttf
pyftsubset bg.ttf --unicodes="U+0020-007E,U+00A0,U+00A9,U+00C1,U+00C9,U+00CD,U+00D3,U+00DA,U+00DD,U+00E1,U+00E4,U+00E9,U+00ED,U+00F3,U+00F4,U+00FA,U+00FD,U+00D7,U+010C-010F,U+011A-011B,U+0139-013A,U+013D-013E,U+0147-0148,U+0154-0155,U+0158-0159,U+0160-0161,U+0164-0165,U+016E-016F,U+017D-017E,U+2013-2014,U+2018-201A,U+201C-201E,U+2022,U+2026,U+20AC,U+2192" \
  --layout-features='kern,liga,ccmp,locl,mark,mkmk' --no-hinting --desubroutinize --flavor=woff2 --output-file=BricolageGrotesque-subset.woff2
```

Source TTFs: https://github.com/google/fonts/tree/main/ofl/bricolagegrotesque and .../ofl/kalam
