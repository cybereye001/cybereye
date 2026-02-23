

# Remove Phone Numbers from Website

## Changes

### 1. `src/components/Footer.tsx` (line 147)
- Remove the line `Phone: +91 9021838941`

### 2. `src/pages/Contact.tsx` (lines 65-69)
- Remove the "Call Us" contact card with phone number `+91 9021838941`
- Update the SEO description to remove the phone number mention

### 3. `src/pages/About.tsx` (line 100)
- Remove the phone number `+91 9172573489` from the founder's contact info

### 4. `src/components/PricingSection.tsx` (line 56)
- Change "24/7 phone support" to "24/7 priority support"

### Note
- Phone **input fields** in forms (Demo request, Job Application, Admin panel) will be kept since those collect user phone numbers, not display company phone numbers.

