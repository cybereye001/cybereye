

# Add 4th Contact Info Card

## Current State
The Contact page has 3 info cards: CyberEye Support (email), Registered Office (address), and Live Chat. The grid is set to `grid-cols-2 lg:grid-cols-4`, so adding a 4th card will fill the row nicely.

## Change
Add a 4th card -- **Response Time** with a clock icon, showing "Within 24 Hours" to highlight quick response commitment.

### File: `src/pages/Contact.tsx`
- Import `Clock` icon from lucide-react
- Add a new entry to the `contactInfo` array:
  - Icon: `Clock`
  - Title: "Response Time"
  - Value: "Within 24 Hours"
  - Link: "#"

This keeps the 2x2 mobile grid layout consistent with the design system.

