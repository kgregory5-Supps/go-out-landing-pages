# Debug Notes - April 8

## Issue
The hero section on Extra Strength page shows the trust bar and benefits bar at bottom, but the main hero content (title, description, bottle image, pricing, CTA) is INVISIBLE in the screenshot despite being in the DOM/markdown.

The Daily Maintenance page hero WAS visible in the webdev_check_status screenshot. So the issue is intermittent or related to the framer-motion animations not triggering on initial load in the preview browser.

## Root Cause
framer-motion `initial={{ opacity: 0, y: 30 }}` with `animate={{ opacity: 1, y: 0 }}` is NOT firing in the embedded preview browser. The elements stay at opacity: 0.

## Fix
Remove ALL framer-motion from the entire project. Replace with plain divs. The animations are nice-to-have but they're breaking the preview and potentially real browsers too.
