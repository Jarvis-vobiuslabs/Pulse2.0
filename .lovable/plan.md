
# Pulse - Landing Page

## Overview
Build a minimalist, high-end landing page for Pulse, an anonymous polling app for iOS.

## Key Elements

### Hero Section
- Full-screen hero with background video (vertically flipped with scaleY(-1))
- White gradient overlay blending video into background
- 290px top padding for editorial spacing
- Max-width 1200px centered content container

### Typography
- Import **Geist** (sans-serif) and **Instrument Serif** (italic) from Google Fonts
- Main heading: "Simple **management** for your remote team" — adapted to Pulse's context (e.g., "Simple **polling** for your community")
- Heading: Geist medium, 80px, tracking -0.04em
- Italic accent word: Instrument Serif italic, 100px
- Description: Geist, 18px, 80% opacity, slate (#373a46), max-w-[554px]

### Interactive Components
- **Email input bar**: Rounded (40px), bg-[#fcfcfc], thin border, soft shadow, with CTA button inside
- **CTA Button**: Dark gradient with complex inner shadow for glossy tactile feel
- **Social proof badge**: "1,020+ Reviews" with star icons below the input

### Animations
- Staggered fade + slide-up entrance animations using **Motion** (framer-motion) for heading, description, and input block

### Technical Details
- Background video with `object-cover` and `[transform:scaleY(-1)]`
- Gradient overlay: `bg-gradient-to-b from-[26.416%] from-[rgba(255,255,255,0)] to-[66.943%] to-white`
- Button inner shadow: `shadow-[inset_-4px_-6px_25px_0px_rgba(201,201,201,0.08),inset_4px_4px_10px_0px_rgba(29,29,29,0.24)]`
- Responsive: scale heading down on mobile
