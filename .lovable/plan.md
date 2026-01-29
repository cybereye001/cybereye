

## Company Name Update: Technologies → Security

Yeh change "CyberEye Technologies (OPC) Pvt. Ltd." ko "CyberEye Security (OPC) Pvt. Ltd." se replace karega pure website mein.

### Changes Required (8 Files)

| File | Occurrences |
|------|-------------|
| `index.html` | 8 places (title, meta tags, schema.org) |
| `src/components/Navbar.tsx` | 1 place |
| `src/components/Footer.tsx` | 5 places |
| `src/components/HeroSection.tsx` | 1 place |
| `src/pages/About.tsx` | 3 places |
| `src/pages/Terms.tsx` | 2 places |
| `src/pages/Privacy.tsx` | 2 places |
| `src/pages/NotFound.tsx` | 1 place |

### Implementation Steps

1. **index.html** - Update SEO metadata, titles, and Schema.org structured data
2. **Navbar.tsx** - Update company attribution text
3. **Footer.tsx** - Update all footer branding references
4. **HeroSection.tsx** - Update hero subheadline
5. **About.tsx** - Update company name in about section
6. **Terms.tsx** - Update legal document references
7. **Privacy.tsx** - Update privacy policy references
8. **NotFound.tsx** - Update copyright text

---

### Technical Details

Har jagah simple text replacement hoga:
```
"CyberEye Technologies (OPC) Pvt. Ltd." → "CyberEye Security (OPC) Pvt. Ltd."
```

Schema.org mein bhi `alternateName` update hoga:
```
"CyberEye Technologies" → "CyberEye Security"
```

