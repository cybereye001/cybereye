

# US Compliance Standards Removal

## What will change

Remove all US-specific compliance standards (HIPAA, SOC 2, CCPA, FERPA) from across the website and replace with India/international-relevant standards like **IT Act 2000**, **DPDPA 2023** (Digital Personal Data Protection Act), and **ISO 27001** (already present).

## Files to update

### 1. `src/components/ComplianceSection.tsx`
- **Remove:** HIPAA, SOC 2, CCPA
- **Keep:** GDPR, ISO 27001, PCI DSS (these are international standards)
- **Add:** IT Act 2000 (India), DPDPA 2023 (India's new data protection law)

### 2. `src/components/FAQ.tsx`
- Update the compliance FAQ answer to remove "HIPAA, SOX" and mention GDPR, DPDPA, IT Act instead

### 3. `src/components/UseCases.tsx`
- Healthcare description: Remove "HIPAA compliance" mention, replace with "data protection compliance"

### 4. `src/pages/Clients.tsx`
- Healthcare challenges: Replace "HIPAA compliance" with "DPDPA compliance"
- Education challenges: Replace "FERPA compliance" with "Data protection compliance"
- Banking challenges: Keep "PCI DSS compliance" (it's international)

### 5. `src/components/Testimonials.tsx`
- Update the HIPAA mention (though this component is currently removed from homepage per earlier cleanup, updating for consistency)

## Summary
All US-only regulations (HIPAA, SOC 2, CCPA, FERPA, SOX) will be replaced with Indian and international equivalents across 5 files.
