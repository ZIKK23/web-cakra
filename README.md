# CAKRA - Modern Heritage

Platform literasi digital untuk siswa SMP menggunakan AI secara etis sesuai nilai Pancasila.

## 🎨 Design Theme

**Modern Heritage** - Menggabungkan nilai-nilai Pancasila dengan Generative AI

### Color Palette
- **Background**: `#0F0F0F` (Deep Black)
- **Primary Gold**: `#C5A059` (Heritage Gold)
- **Secondary Navy**: `#1B365D` (Traditional Navy)
- **Text**: `#F4EBD0` (Warm Cream)

## ✨ Features

### Hero Section with Scroll-Sequence Animation
- **144 frames** scroll-based animation
- Canvas rendering for optimal performance
- Circuit Mandala animated background
- Fully responsive design
- Gold gradient typography

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

```bash
# Install dependencies
npm install

# Generate placeholder images (optional for development)
npm run generate-sequence

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```text
cakra/
├── app/
│   ├── api/modules/[slug]/route.ts  # PDF module endpoint
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Homepage entry
│   └── globals.css                  # Global styles
├── components/
│   └── sections/
│       ├── CakraLandingPage.tsx     # Section composer
│       └── cakra/
│           ├── index.ts             # Barrel exports
│           ├── useCakraLandingBackground.ts
│           ├── LandingBackground.tsx
│           ├── CakraHeader.tsx
│           ├── HeroSection.tsx
│           ├── AboutSection.tsx
│           ├── TimelineSection.tsx
│           ├── ModulesSection.tsx
│           ├── PlaygroundSection.tsx
│           ├── SurveyDataSection.tsx
│           ├── DocumentationSection.tsx
│           └── CakraFooter.tsx
├── public/
│   └── assets/logo-sequence/        # 144 animation frames
├── scripts/
│   ├── generate-placeholder-sequence.js
│   └── generate-webp-sequence.js
└── lib/
    ├── home-content.ts              # Content source for sections
    ├── simulate-prompt.ts           # Prompt sandbox simulation
    ├── pdf.ts                       # PDF generator for module API
    ├── types.ts                     # Shared domain types
    └── utils.ts                     # Utility functions
```

## 🎯 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React

## 🎨 Typography

- **Serif Font**: Playfair Display (for "Cakra" title)
- **Sans-Serif Font**: Inter (for body text)

## 📊 Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Scroll Animation**: 60fps
- **Image Format**: WebP (optimized)

## 🖼️ Image Sequence

The hero section uses a 144-frame scroll-sequence animation. Images are located in:
```
public/assets/logo-sequence/
├── ezgif-frame-001.webp
├── ezgif-frame-002.webp
├── ...
└── ezgif-frame-144.webp
```

### Generate Placeholder Images

For development, you can generate placeholder images:

```bash
npm run generate-sequence
```

### Replace with Actual Images

For production, replace placeholders with your actual logo animation:
1. Export 144 frames from your animation software
2. Format: WebP or PNG with transparency
3. Size: 1920x1080 (recommended for desktop clarity)
4. Naming: `ezgif-frame-001.webp` to `ezgif-frame-144.webp`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub
git add .
git commit -m "feat: initial commit"
git push

# Deploy
vercel
```

### Build for Production

```bash
npm run build
npm run start
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run generate-sequence` - Generate placeholder images
- `npm run generate-webp` - Generate WebP sequence

## 🎓 Target Audience

- **Primary**: Siswa SMP (User)
- **Secondary**: Dosen Pendidikan Pancasila (Validator)

## 🤝 Contributing

This project is developed by Telkom University students as a social project.

## 📄 License

© 2026 CAKRA - Developed with ❤️ by Telkom University Students

---

## 🔧 Troubleshooting

### Images Not Loading

If the scroll animation doesn't work:
1. Check if images exist in `public/assets/logo-sequence/`
2. Run `npm run generate-sequence` to create placeholders
3. Check browser console for errors

### Slow Performance

If animation is laggy:
1. Optimize image sizes (< 100KB each)
2. Use WebP format
3. Reduce number of frames in `components/sections/cakra/constants.ts`

### Hydration Errors

If you see hydration errors:
1. Clear `.next` folder: `rm -rf .next`
2. Restart dev server: `npm run dev`
3. Hard refresh browser: `Ctrl+Shift+R`

---

**Built with Modern Heritage in mind** 🎨
