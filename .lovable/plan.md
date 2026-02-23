

# Fix: Show Messages in Admin Panel

## Problem
Two message fields are not visible in the Admin panel:
1. **Job Applications** - "Cover Letter / Message" field is collected but never displayed in the table
2. **Contact Messages** - "Message" column is hidden on medium screens (`hidden lg:table-cell`), only visible on very large screens

## Changes

### File: `src/pages/Admin.tsx`

**1. Add "Message" column to Job Applications table**
- Add a new "Message" header after the "Department" column
- Display the `app.message` value with truncation (line-clamp) so long cover letters don't break the layout
- Will be visible on large screens (lg and above)

**2. Make Contact Messages "Message" column more visible**
- Change the Message column from `hidden lg:table-cell` to `hidden md:table-cell` so it shows on medium screens too
- Both tables will show a truncated preview of the message with a max width

This way, admins will be able to see what applicants wrote in their cover letter and what users wrote in contact messages directly in the table.

