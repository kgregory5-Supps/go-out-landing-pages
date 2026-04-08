# Debug Notes - Landing Page Rendering

## Issue
The hero sections render correctly (visible text, images, CTAs). But when scrolling down, the lower sections appear blank/invisible in the screenshots even though the markdown extraction shows all content is present.

## Root Cause Hypothesis
The text color `text-goout-navy/70` (oklch 0.25 0.05 250 at 70% opacity) against `bg-white` should be visible. The issue is likely that:
1. The framer-motion animations (whileInView) are not triggering in the headless browser viewport
2. The elements start at `opacity: 0` and never animate to `opacity: 1` because IntersectionObserver doesn't fire

## Fix
Either:
- Remove the initial opacity:0 from framer-motion animations
- Or use a simpler CSS animation approach that doesn't depend on viewport intersection

## Pages Status
- / (Daily Maintenance) - Hero renders, lower sections blank visually
- /extra-strength - Hero renders perfectly with real bottle, lower sections blank visually  
- /now - Same pattern

## Content Status
All markdown content extracts perfectly - the issue is purely visual rendering in the preview browser.
