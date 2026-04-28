/**
 * Script untuk generate placeholder images untuk scroll sequence
 * Jalankan dengan: node scripts/generate-placeholder-sequence.js
 * 
 * NOTE: Ini hanya untuk development. Ganti dengan actual logo sequence images.
 */

const fs = require('fs');
const path = require('path');

const TOTAL_FRAMES = 100;
const OUTPUT_DIR = path.join(__dirname, '../public/assets/logo-sequence');

// Create directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`✅ Created directory: ${OUTPUT_DIR}`);
}

// Create a simple SVG placeholder for each frame
for (let i = 1; i <= TOTAL_FRAMES; i++) {
  const rotation = (i / TOTAL_FRAMES) * 360;
  const scale = 0.8 + Math.sin((i / TOTAL_FRAMES) * Math.PI * 2) * 0.2;
  const opacity = 0.6 + Math.sin((i / TOTAL_FRAMES) * Math.PI * 4) * 0.4;

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad${i}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#C5A059;stop-opacity:${opacity}" />
      <stop offset="100%" style="stop-color:#1B365D;stop-opacity:${opacity}" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="600" height="600" fill="#0F0F0F"/>
  
  <!-- Rotating logo placeholder -->
  <g transform="translate(300, 300) rotate(${rotation}) scale(${scale})">
    <!-- Outer circle -->
    <circle cx="0" cy="0" r="120" fill="none" stroke="url(#grad${i})" stroke-width="3"/>
    
    <!-- Inner star (representing Pancasila) -->
    ${generateStar(0, 0, 5, 80, 40, `url(#grad${i})`)}
    
    <!-- Circuit lines -->
    ${Array.from({ length: 8 }, (_, j) => {
      const angle = (j * 45 * Math.PI) / 180;
      const x = Math.cos(angle) * 60;
      const y = Math.sin(angle) * 60;
      const x2 = Math.cos(angle) * 100;
      const y2 = Math.sin(angle) * 100;
      return `<line x1="${x}" y1="${y}" x2="${x2}" y2="${y2}" stroke="#C5A059" stroke-width="2"/>`;
    }).join('\n    ')}
    
    <!-- Center circle -->
    <circle cx="0" cy="0" r="30" fill="#C5A059" opacity="0.8"/>
    
    <!-- Text -->
    <text x="0" y="180" text-anchor="middle" font-family="serif" font-size="24" fill="#F4EBD0" opacity="0.8">
      Cakra
    </text>
  </g>
</svg>`;

  const filename = `frame-${String(i).padStart(4, '0')}.svg`;
  const filepath = path.join(OUTPUT_DIR, filename);
  
  fs.writeFileSync(filepath, svg);
  
  if (i % 10 === 0) {
    console.log(`Generated ${i}/${TOTAL_FRAMES} frames...`);
  }
}

console.log(`\n✅ Successfully generated ${TOTAL_FRAMES} placeholder frames!`);
console.log(`📁 Location: ${OUTPUT_DIR}`);
console.log(`\n⚠️  NOTE: Replace these placeholders with your actual logo sequence images.`);
console.log(`   Expected format: frame-0001.png, frame-0002.png, etc.`);

// Helper function to generate star path
function generateStar(cx, cy, points, outerRadius, innerRadius, fill) {
  let path = '';
  const angle = Math.PI / points;

  for (let i = 0; i < 2 * points; i++) {
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    const currAngle = i * angle - Math.PI / 2;
    const x = cx + r * Math.cos(currAngle);
    const y = cy + r * Math.sin(currAngle);
    
    if (i === 0) {
      path += `M ${x} ${y} `;
    } else {
      path += `L ${x} ${y} `;
    }
  }
  
  path += 'Z';
  
  return `<path d="${path}" fill="${fill}"/>`;
}
