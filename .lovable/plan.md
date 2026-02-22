
# SEO Optimization: Unique Titles, Meta Descriptions, Keywords & Breadcrumbs

## Problem
Google sees the same title ("CyberEye Security (OPC) Pvt. Ltd. - AI-Powered Data Leak Prevention") for every page because only `index.html` sets a `<title>`. No page has its own meta description or keywords. This confuses Google and hurts rankings for queries like "cyber eye" (with space).

## Solution

### 1. Create a Reusable SEO/Helmet Component
A new `SEOHead` component that dynamically sets `<title>`, `<meta description>`, `<meta keywords>`, and canonical URL for each page using `document.title` and DOM meta tag manipulation via `useEffect`.

### 2. Unique Titles & Descriptions Per Page

| Page | Title | Meta Description |
|------|-------|-----------------|
| Home (/) | AI Powered Data Leak Prevention Software - CyberEye Security | CyberEye Security offers AI-powered data leak prevention (DLP) software that monitors, detects, and blocks insider threats in real-time. Protect your enterprise data today. |
| About | About CyberEye Security - AI Based DLP Company India | Learn about CyberEye Security (OPC) Pvt. Ltd., an Indian cybersecurity company building AI-powered data leak prevention solutions to protect enterprises from insider threats. |
| Services | DLP Solutions & Cybersecurity Services - CyberEye Security | Explore CyberEye's enterprise cybersecurity services including data leak prevention, insider threat detection, endpoint monitoring, and compliance management solutions. |
| Pricing | Pricing Plans - CyberEye Security DLP Software | Compare CyberEye Security pricing plans for AI-powered data leak prevention. Choose Starter, Business, or Enterprise plan with a 14-day free trial. |
| Contact | Contact CyberEye Security - Cyber Protection Experts India | Get in touch with CyberEye Security for data leak prevention solutions. Email official@cybereye.co.in or call +91 9021838941. We respond within 24 hours. |
| Blog | Cybersecurity Blog & Insights - CyberEye Security | Read the latest cybersecurity articles, DLP best practices, insider threat intelligence, and data protection guides from CyberEye Security experts. |
| Careers | Careers at CyberEye Security - Join Our Cybersecurity Team | Join CyberEye Security's growing team. Explore open positions in security engineering, AI research, cloud security, and more. Remote-friendly roles in India. |
| Demo | Request a Demo - CyberEye Data Leak Prevention Software | Request a free demo of CyberEye's AI-powered DLP solution. See real-time threat detection, endpoint monitoring, and data protection in action. |
| Clients | Industries We Protect - CyberEye Security Solutions | Discover how CyberEye Security protects banking, healthcare, IT, government, and enterprise organizations with AI-powered data leak prevention solutions. |
| Login | Login - CyberEye Security Dashboard | Sign in to your CyberEye Security dashboard to manage endpoints, view threat alerts, and monitor data leak prevention policies. |
| Terms | Terms of Service - CyberEye Security (OPC) Pvt. Ltd. | Read the terms and conditions for using CyberEye Security's data leak prevention software and services. |
| Privacy | Privacy Policy - CyberEye Security (OPC) Pvt. Ltd. | CyberEye Security's privacy policy. Learn how we collect, use, and protect your personal information and data. |

### 3. Keyword Optimization for "cyber eye" (with space)
Each page's meta keywords will include both "cybereye" and "cyber eye" variations to improve ranking for the spaced query:
- Primary: `CyberEye, cyber eye, CyberEye Security, cyber eye security`
- Plus page-specific keywords (DLP, data leak prevention, insider threat, etc.)

### 4. Breadcrumb Navigation (Schema.org + Visual)
Add breadcrumbs to all inner pages (not Home) for better Google structure:
- Visual breadcrumb below the navbar (e.g., Home > Services > DLP Solutions)
- Schema.org BreadcrumbList JSON-LD for rich search results

### 5. Update Default Title in index.html
Change the default `<title>` in `index.html` to the optimized Home page title, and update the default meta description.

---

## Technical Details

### New File: `src/components/SEOHead.tsx`
A component accepting `title`, `description`, `keywords`, and `pathname` props. Uses `useEffect` to:
- Set `document.title`
- Update or create `<meta name="description">`
- Update or create `<meta name="keywords">`
- Update `<link rel="canonical">`
- Inject BreadcrumbList JSON-LD script

### New File: `src/components/Breadcrumbs.tsx`
A visual breadcrumb component using the existing `breadcrumb.tsx` UI components. Shows `Home > Current Page` on all inner pages.

### Files to Modify
| File | Change |
|------|--------|
| `index.html` | Update default title & meta description with optimized Home page values |
| `src/pages/Index.tsx` | Add `<SEOHead>` with Home page SEO data |
| `src/pages/About.tsx` | Add `<SEOHead>` + `<Breadcrumbs>` |
| `src/pages/Services.tsx` | Add `<SEOHead>` + `<Breadcrumbs>` |
| `src/pages/Pricing.tsx` | Add `<SEOHead>` + `<Breadcrumbs>` |
| `src/pages/Contact.tsx` | Add `<SEOHead>` + `<Breadcrumbs>` |
| `src/pages/Blog.tsx` | Add `<SEOHead>` + `<Breadcrumbs>` |
| `src/pages/Careers.tsx` | Add `<SEOHead>` + `<Breadcrumbs>` |
| `src/pages/Demo.tsx` | Add `<SEOHead>` + `<Breadcrumbs>` |
| `src/pages/Clients.tsx` | Add `<SEOHead>` + `<Breadcrumbs>` |
| `src/pages/Login.tsx` | Add `<SEOHead>` + `<Breadcrumbs>` |
| `src/pages/Terms.tsx` | Add `<SEOHead>` + `<Breadcrumbs>` |
| `src/pages/Privacy.tsx` | Add `<SEOHead>` + `<Breadcrumbs>` |
| `sitemap.xml` & `public/sitemap.xml` | Update lastmod dates to current |

### SEOHead Component Structure
```text
Props:
  title: string
  description: string
  keywords: string
  pathname: string (e.g., "/about")
  breadcrumbLabel: string (e.g., "About Us")

useEffect:
  1. document.title = title
  2. meta[name="description"].content = description
  3. meta[name="keywords"].content = keywords
  4. link[rel="canonical"].href = "https://cybereye.co.in" + pathname
  5. Inject BreadcrumbList JSON-LD
  6. Cleanup on unmount (restore defaults)
```

This will make Google clearly identify each page's purpose, improve rankings for both "cybereye" and "cyber eye" queries, and give structured breadcrumb data for rich search results.
