# Changelog

## [1.0.0] - 2026-04-27

### ✨ Initial Release

#### Added
- Hero Section with scroll-sequence animation (144 frames)
- Canvas-based rendering for optimal performance
- Circuit Mandala animated background
- Responsive design for all devices
- Gold gradient typography
- Modern Heritage theme

#### Features
- **Scroll Animation**: 144-frame sequence that responds to scroll
- **Color Palette**: Heritage Gold (#C5A059), Deep Black (#0F0F0F), Navy (#1B365D)
- **Typography**: Playfair Display (serif) + Inter (sans-serif)
- **Performance**: 60fps animation, < 1.5s FCP
- **Responsive**: Mobile-first design

#### Tech Stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Framer Motion 12
- TypeScript 5

### 🗑️ Removed
- Unnecessary documentation files
- Unused components (Navigation, AboutSection, HeroSection)
- Demo pages (/cakra, /cakra-lite)
- Error, loading, and not-found pages

### 📝 Changed
- Renamed all "SillaGen" references to "Cakra"
- Simplified project structure
- Updated README with clear instructions
- Consolidated landing page to root route
- Split landing page into section modules under `components/sections/cakra/`
- Added background hook + canvas pipeline for responsive behavior
- Removed obsolete `app/fonts.ts` and legacy `lib/constants.ts`

### 🎯 Current Structure
```text
cakra/
├── app/
├── components/sections/CakraLandingPage.tsx
├── components/sections/cakra/...
├── lib/
├── public/assets/logo-sequence/
└── scripts/
```

---

**Built with ❤️ by Telkom University Students**
