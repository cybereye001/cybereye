
# Replace Old Logo with New CyberEye Logo

## Overview
Replace the current logo (`logo.jpg`) with the new CyberEye eye logo you uploaded, across all locations including the favicon.

## Files to Update

### Step 1: Copy New Logo to Project
Copy the uploaded image to both locations where the logo is stored:
- `src/assets/logo.png` - For React component imports
- `public/logo.png` - For SEO meta tags and public access
- `public/favicon.png` - For browser tab favicon

### Step 2: Update React Components
Update the import statements in these files to use the new logo:

| File | Current Import | Change |
|------|----------------|--------|
| `src/components/Navbar.tsx` | `import logo from "@/assets/logo.jpg"` | Change to `.png` |
| `src/components/Footer.tsx` | `import logo from "@/assets/logo.jpg"` | Change to `.png` |
| `src/pages/NotFound.tsx` | `import logo from "@/assets/logo.jpg"` | Change to `.png` |
| `src/pages/Demo.tsx` | `import logoImage from "@/assets/logo.jpg"` | Change to `.png` |

### Step 3: Update index.html SEO Meta Tags
Update references in `index.html`:
- Line 14: `og:image` - Change `logo.jpg` to `logo.png`
- Line 15: `og:image:secure_url` - Change `logo.jpg` to `logo.png`
- Line 21: `twitter:image` - Change `logo.jpg` to `logo.png`
- Line 34: Schema.org logo - Change `logo.jpg` to `logo.png`

### Step 4: Update Contact Info in Schema
While updating `index.html`, also update the contact details in Schema.org structured data to match the new official info:
- Email: `official@cybereye.co.in`
- Phone: `+919021838941`

## Logo Locations Summary

| Location | Purpose | Action |
|----------|---------|--------|
| `src/assets/logo.png` | React imports | Copy new logo |
| `public/logo.png` | SEO/meta tags | Copy new logo |
| `public/favicon.png` | Browser favicon | Copy new logo |
| Delete `src/assets/logo.jpg` | Old logo cleanup | Remove |
| Delete `public/logo.jpg` | Old logo cleanup | Remove |

## Technical Notes
- The new logo is a PNG with transparency (white background in the image)
- The favicon will use the same new eye logo
- All React components will automatically use the new logo after import path update
