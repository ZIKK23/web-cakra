/**
 * Script untuk generate WebP images untuk scroll sequence
 * Menggunakan sharp library untuk generate WebP
 * Jalankan dengan: node scripts/generate-webp-sequence.js
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

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (error) {
  console.log('⚠️  Sharp not found. Installing sharp...');
  const { execSync } = require('child_process');
  try {
    execSync('npm install sharp', { stdio: 'inherit' });
    sharp = require('sharp');
    console.log('✅ Sharp installed successfully!');
  } catch (installError) {
    console.error('❌ Failed to install sharp. Please run: npm install sharp');
    process.exit(1);
  }
}

// Function to generate star path for SVG
function generateStarPath(cx, cy, points, outerRadius, innerRadius) {
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
  return path;
}

// Generate frames
async function generateFrames() {
  console.log(`🎨 Generating ${TOTAL_FRAMES} WebP frames...`);
  
  for (let i = 1; i <= TOTAL_FRAMES; i++) {
    const rotation = (i / TOTAL_FRAMES) * 360;
    const scale = 0.8 + Math.sin((i / TOTAL_FRAMES) * Math.PI * 2) * 0.2;
    const opacity = 0.6 + Math.sin((i / TOTAL_FRAMES) * Math.PI * 4) * 0.4;

    // Generate circuit lines
    let circuitLines = '';
    for (let j = 0; j < 8; j++) {
      const angle = (j * 45 * Math.PI) / 180;
      const x = 300 + Math.cos(angle) * 60 * scale;
      const y = 300 + Math.sin(angle) * 60 * scale;
      const x2 = 300 + Math.cos(angle) * 100 * scale;
      const y2 = 300 + Math.sin(angle) * 100 * scale;
      circuitLines += `<line x1="${x}" y1="${y}" x2="${x2}" y2="${y2}" stroke="#C5A059" stroke-width="2"/>`;
    }

    const starPath = generateStarPath(300, 300, 5, 80 * scale, 40 * scale);

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
  
  <!-- Rotating logo -->
  <g transform="translate(300, 300) rotate(${rotation}) scale(${scale}) translate(-300, -300)">
    <!-- Outer circle -->
    <circle cx="300" cy="300" r="120" fill="none" stroke="url(#grad${i})" stroke-width="3"/>
    
    <!-- Inner star (Pancasila) -->
    <path d="${starPath}" fill="url(#grad${i})"/>
    
    <!-- Circuit lines -->
    ${circuitLines}
    
    <!-- Center circle -->
    <circle cx="300" cy="300" r="30" fill="#C5A059" opacity="0.8"/>
  </g>
  
  <!-- Text -->
  <text x="300" y="480" text-anchor="middle" font-family="serif" font-size="24" fill="#F4EBD0" opacity="0.8">
    Cakra
  </text>
</svg>`;

    const filename = `frame-${String(i).padStart(4, '0')}.webp`;
    const filepath = path.join(OUTPUT_DIR, filename);
    
    try {
      // Convert SVG to WebP using sharp
      await sharp(Buffer.from(svg))
        .webp({ quality: 85, effort: 6 })
        .toFile(filepath);
      
      if (i % 10 === 0) {
        console.log(`✅ Generated ${i}/${TOTAL_FRAMES} frames...`);
      }
    } catch (error) {
      console.error(`❌ Error generating frame ${i}:`, error.message);
    }
  }

  console.log(`\n🎉 Successfully generated ${TOTAL_FRAMES} WebP frames!`);
  console.log(`📁 Location: ${OUTPUT_DIR}`);
  console.log(`\n💡 WebP Benefits:`);
  console.log(`   - 30-50% smaller than PNG`);
  console.log(`   - Faster loading time`);
  console.log(`   - Better compression`);
  console.log(`\n⚠️  NOTE: Replace these placeholders with your actual logo sequence.`);
  console.log(`   Expected format: frame-0001.webp, frame-0002.webp, etc.`);
}

// Run the generator
generateFrames().catch(error => {
  console.error('❌ Error:', error);
  process.exit(1);
});
