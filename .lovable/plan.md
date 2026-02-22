

# Comprehensive Fix Plan: Multiple Issues

## Issues to Fix

### 1. Demo Requests - Show All Info in Admin Panel
**Problem**: Demo form collects firstName, lastName, email, company, phone, employees - but the Admin panel table only shows name, email, company, phone. The "Number of Employees" is stored in the `message` field but never displayed.

**Fix**: 
- Update Admin panel's Demo Requests table to show all columns including a dedicated "Employees" column (parsed from `message` field which stores "Employees: X")
- Add an expandable detail view or show message/employees info in the table

### 2. Contact "Send Us a Message" - Make It Work
**Problem**: The Contact page form's `handleSubmit` function is empty - it does nothing. No data is saved and nothing appears in admin.

**Fix**:
- Create a new `contact_messages` database table (name, email, company, subject, message, status, created_at)
- Add RLS policies (anyone can insert, admins can view/update)
- Wire up the Contact form to save to this table with validation
- Add a "Contact Messages" tab in the Admin panel to view submissions

### 3. Careers - Update Email
**Problem**: "Send Your Resume" mailto link uses `cybereye.help@gmail.com`

**Fix**: Change to `official@cybereye.co.in`

### 4. Blog - Update Dates to Latest
**Problem**: All blog dates are hardcoded to Jan 2025 / Dec 2024

**Fix**: Use dynamic dates relative to today's date so they always appear current (e.g., "2 days ago", "1 week ago" style, or dynamically calculated recent dates)

### 5. Blog - "Read Article" Button Not Working
**Problem**: The "Read Article" button on the featured post has no link or action

**Fix**: Since these are static blog posts without individual pages, make the button show a toast saying "Full article coming soon" or link to a relevant section. Alternatively, make the entire card clickable with a coming-soon indicator.

### 6. Careers - Add More Jobs + "New" Tag
**Problem**: Only 6 job openings exist. User wants more jobs and a "New" badge on recently added ones.

**Fix**:
- Add 4-5 new job positions (e.g., SOC Analyst, Cloud Security Architect, Penetration Tester, Product Manager, QA Engineer)
- Add a `isNew` flag to job objects and render a "New" badge/tag on those positions

### 7. Admin Panel - Better Layout & Organization
**Problem**: Admin panel needs to be more organized and systematic

**Fix**:
- Add the new "Contact Messages" tab alongside existing tabs
- Show expanded detail view for demo requests (show employees count, message)
- Add search/filter capability
- Improve card layout with better spacing and information density
- Add a "Contact Messages" stats card

---

## Technical Details

### Database Migration (New Table)
```sql
CREATE TABLE public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'unread'
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Anyone can submit
CREATE POLICY "Anyone can submit contact message"
  ON public.contact_messages FOR INSERT WITH CHECK (true);

-- Admins can view
CREATE POLICY "Admins can view contact messages"
  ON public.contact_messages FOR SELECT
  USING (has_role(auth.uid(), 'admin'));

-- Admins can update status
CREATE POLICY "Admins can update contact messages"
  ON public.contact_messages FOR UPDATE
  USING (has_role(auth.uid(), 'admin'));
```

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Contact.tsx` | Add form submission logic to save to `contact_messages` table with validation and toast feedback |
| `src/pages/Admin.tsx` | Add Contact Messages tab, show all demo request fields (employees), improve layout with better cards and detail views |
| `src/pages/Blog.tsx` | Update dates to be dynamic/recent, add toast on "Read Article" click |
| `src/pages/Careers.tsx` | Change email to `official@cybereye.co.in`, add 4-5 new jobs, add "New" badge |
| `src/integrations/supabase/types.ts` | Will auto-update after migration |

### New Jobs to Add
- SOC Analyst (Security Operations) - New
- Cloud Security Architect (Engineering) - New
- Penetration Tester / VAPT Specialist (Security Operations) - New
- Product Manager (Product) - New  
- Digital Marketing Executive (Marketing) - New

### Blog Date Strategy
Generate dates dynamically based on today's date, spacing them out (e.g., 1 day ago, 3 days ago, 1 week ago, 2 weeks ago, etc.) so they always look fresh.

