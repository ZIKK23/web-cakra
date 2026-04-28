# Development Guide

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Generate placeholder images (for development)
npm run generate-sequence

# Start development server
npm run dev
```

Visit: http://localhost:3000

## 📁 Project Structure

```text
cakra/
├── app/
│   ├── api/modules/[slug]/route.ts  # PDF module endpoint
│   ├── page.tsx                      # Landing page entry
│   ├── layout.tsx
│   └── globals.css
├── components/sections/
│   ├── CakraLandingPage.tsx          # Page composer
│   └── cakra/                        # Feature modules per section
├── public/assets/logo-sequence/      # 144 WebP frames
├── scripts/                          # Sequence generation scripts
└── lib/
    ├── home-content.ts
    ├── simulate-prompt.ts
    ├── pdf.ts
    ├── types.ts
    └── utils.ts
```

## 🎨 Component Architecture

### Cakra Section Modules

Landing page dipecah menjadi modul kecil di `components/sections/cakra/`
agar tiap section bisa di-maintain terpisah.

**Key Features:**
- 144-frame scroll animation
- Canvas rendering
- Circuit Mandala background
- Responsive design
- SSR-safe (client-side only rendering)

**Core Hook:** `useCakraLandingBackground`
- preload 144 frame
- map scroll top->bottom ke frame 0->143
- render ke canvas responsif (desktop sampai mobile)

## 🎯 Key Technologies

### Next.js 16
- App Router
- Server Components
- Client Components (`"use client"`)
- Image Optimization

### Framer Motion
- `useScroll`: Track scroll progress
- `useTransform`: Map scroll to frame index
- `motion`: Animated components

### Canvas API
- Image sequence rendering
- Device pixel ratio handling
- Performance optimization

### Tailwind CSS 4
- Utility-first styling
- Custom color palette
- Responsive design
- Dark mode ready

## 🖼️ Image Sequence

### Format
- **Type**: WebP (best compression)
- **Size**: 1920x1080 (recommended)
- **Naming**: `ezgif-frame-001.webp` to `ezgif-frame-144.webp`
- **Location**: `public/assets/logo-sequence/`

### Generate Placeholders

```bash
# Generate SVG placeholders
npm run generate-sequence

# Generate WebP placeholders (requires sharp)
npm run generate-webp
```

### Replace with Production Images

1. Export 144 frames from animation software
2. Convert to WebP format
3. Optimize (< 100KB each)
4. Name correctly: `ezgif-frame-001.webp` to `ezgif-frame-144.webp`
5. Place in `public/assets/logo-sequence/`

## 🎨 Customization

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --background: #0F0F0F;
  --foreground: #F4EBD0;
  --primary-gold: #C5A059;
  --secondary-navy: #1B365D;
}
```

Or directly in components:
```tsx
className="bg-[#0F0F0F] text-[#F4EBD0]"
```

### Change Fonts

Edit `app/globals.css`:

```css
:root {
  --font-playfair: "Iowan Old Style", "Palatino Linotype", serif;
  --font-inter: "Avenir Next", "Segoe UI", Arial, sans-serif;
}
```

### Change Animation Speed

Edit `components/sections/cakra/useCakraLandingBackground.ts`:

```tsx
// Perbesar/perkecil logo sequence
const SCALE_MULTIPLIER = 0.95;
```

### Change Number of Frames

Edit `components/sections/cakra/constants.ts`:

```tsx
const TOTAL_FRAMES = 144; // Change to 50, 100, etc.
```

Then regenerate images:
```bash
npm run generate-sequence
```

## 🐛 Debugging

### Images Not Loading

1. Check if images exist:
   ```bash
   ls public/assets/logo-sequence/
   ```

2. Check browser console for 404 errors

3. Verify file naming (3 digits with leading zeros)

4. Regenerate placeholders:
   ```bash
   npm run generate-sequence
   ```

### Scroll Animation Not Working

1. Check browser console for errors
2. Verify you're on the correct page
3. Hard refresh: `Ctrl+Shift+R`
4. Clear Next.js cache:
   ```bash
   rm -rf .next
   npm run dev
   ```

### Hydration Errors

1. Pastikan logic browser-only ada di `useEffect`
2. Pastikan component canvas memakai `"use client"`
3. Restart dev server setelah perubahan besar

### Performance Issues

1. Optimize images (< 100KB each)
2. Use WebP format
3. Reduce number of frames
4. Check browser performance tab

## 📊 Performance Optimization

### Image Optimization

```bash
# Use WebP format
npm run generate-webp

# Compress images
# Use tools like TinyPNG, ImageOptim, or Squoosh
```

### Code Splitting

Next.js automatically code-splits by route. For further optimization:

```tsx
// Dynamic import
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### Lazy Loading

```tsx
// Lazy load images
<Image
  src="/path/to/image.webp"
  loading="lazy"
  alt="Description"
/>
```

## 🧪 Testing

### Manual Testing

1. **Desktop**: Chrome, Firefox, Safari, Edge
2. **Mobile**: iOS Safari, Chrome Android
3. **Responsive**: Test all breakpoints (320px - 1920px)
4. **Performance**: Lighthouse audit (target: > 90)

### Test Checklist

- [ ] Scroll animation works smoothly
- [ ] Images load correctly
- [ ] Responsive on all devices
- [ ] No console errors
- [ ] Typography renders correctly
- [ ] Colors match design
- [ ] Performance > 90 (Lighthouse)

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Manual Build

```bash
# Build
npm run build

# Test production build
npm run start
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_APP_NAME=CAKRA
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

## 📝 Git Workflow

```bash
# Create feature branch
git checkout -b feature/your-feature

# Make changes
git add .
git commit -m "feat: your feature description"

# Push
git push origin feature/your-feature

# Create PR on GitHub
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Canvas API Docs](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

---

**Happy Coding! 🎨**
