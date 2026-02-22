

# Fix: Google Not Indexing Inner Pages (Canonical Tag Issue)

## Problem
Google Search Console shows "Alternate page with proper canonical tag" for the /careers page (and likely all inner pages). The root cause:

1. `index.html` has a hardcoded `<link rel="canonical" href="https://cybereye.co.in/" />` pointing to the homepage
2. When Googlebot crawls /careers, it first sees this static canonical pointing to "/" 
3. Even though the SEOHead component updates it dynamically via JavaScript, Googlebot may read the HTML-level canonical first
4. Google concludes /careers is just an "alternate" of the homepage and skips indexing it

## Fix

### 1. Remove the static canonical tag from index.html
Remove line 9 (`<link rel="canonical" href="https://cybereye.co.in/" />`) from `index.html`. The SEOHead component already creates and manages the canonical tag dynamically for every page, so the static one is redundant and harmful.

### 2. Update SEOHead to also update OG meta tags
Ensure the `og:url` meta tag is also updated per page (it currently sets `og:url` in index.html to the homepage).

### Files to Modify

| File | Change |
|------|--------|
| `index.html` | Remove the static `<link rel="canonical">` tag (line 9). Also remove the static `og:url` meta tag or set it to a generic value |
| `src/components/SEOHead.tsx` | Ensure it also updates `og:url` and `og:title`/`og:description` per page |

### After Publishing
You will need to go to Google Search Console and click **"REQUEST INDEXING"** for each page (/careers, /services, /about, etc.) so Google re-crawls them with the fix applied.

