
# Fix Remaining Old Domain Reference

## Problem Found
There is **one remaining reference** to the old domain `onkardigitalservicesllp.site` in the codebase:

| File | Line | Current Value |
|------|------|---------------|
| `src/pages/About.tsx` | Line 94 | `www.onkardigitalservicesllp.site` |

## Good News
The main canonical URL in `index.html` is already correctly set to `https://cybereye.co.in/` - no changes needed there.

## Fix Required

### File: `src/pages/About.tsx`

**Change the website reference from:**
```
www.onkardigitalservicesllp.site
```

**To:**
```
www.cybereye.co.in
```

## Summary
This is a simple one-line fix to update the website URL displayed in the About page team section. After this change, there will be no remaining references to the old domain anywhere in the codebase.

Once approved, the changes will be deployed automatically.
