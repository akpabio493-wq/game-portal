# Game Portal - Deployment & Customization Guide

## Project Overview

Your Game Portal is a modern, responsive gaming website built with React, Tailwind CSS, and a dark gaming aesthetic. It features a clean interface with glowing card effects, smooth animations, and easy game management.

---

## Deploying to Vercel

### Option 1: Drag & Drop (Easiest)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New..."** → **"Project"**
3. Select **"Other"** → **"Continue"**
4. Download your project as ZIP from Manus Management UI (⋯ menu → "Download as ZIP")
5. Drag and drop the folder into Vercel
6. Vercel will auto-detect the React app and deploy it
7. Your live URL will be generated automatically

### Option 2: GitHub Integration (Recommended for Updates)

1. Push your project to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click **"Add New..."** → **"Project"**
4. Select your GitHub repository
5. Click **"Deploy"**
6. Vercel will auto-build and deploy on every push

### Option 3: Vercel CLI (Advanced)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project directory
cd game-portal-app

# Deploy
vercel

# Follow the prompts to connect your account and deploy
```

---

## Customizing Your Game Portal

### Adding New Games

Edit `client/src/pages/Home.tsx` and add games to the `GAMES` array:

```typescript
const GAMES: Game[] = [
  {
    id: "my-game",
    title: "My Game Title",
    image: "https://example.com/game-image.jpg",
    url: "https://example.com/my-game",
    category: "Action",
  },
  // Add more games here
];
```

**Required fields:**
- `id`: Unique identifier (use lowercase with hyphens)
- `title`: Game name displayed on the card
- `image`: Image URL (use HTTPS URLs)
- `url`: Link where the game opens
- `category`: Game type (Racing, Action, Puzzle, Adventure, etc.)

### Changing Colors & Theme

All colors are defined in `client/src/index.css` using CSS variables. To customize:

1. **Primary accent color** (neon purple): Change `oklch(0.65 0.25 290)` values
2. **Background color**: Modify `--background: oklch(0.12 0.01 280)`
3. **Text color**: Adjust `--foreground: oklch(0.95 0.01 0)`

Example: To make accents cyan instead of purple:
```css
--accent: oklch(0.65 0.25 200); /* Changed hue from 290 to 200 */
```

### Customizing Game Card Styling

The glowing card effect is defined in `client/src/index.css`:

```css
.glow-card {
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.1), inset 0 0 20px rgba(168, 85, 247, 0.05);
}

.glow-card:hover {
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.3), inset 0 0 30px rgba(168, 85, 247, 0.1), 0 8px 32px rgba(0, 0, 0, 0.5);
  transform: translateY(-8px);
}
```

Adjust the `rgba()` values to change glow colors and intensity.

### Changing Game Grid Layout

In `client/src/pages/Home.tsx`, find the grid section:

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
```

- `grid-cols-1`: 1 column on mobile
- `md:grid-cols-2`: 2 columns on tablets
- `lg:grid-cols-3`: 3 columns on desktop

Change to `lg:grid-cols-4` for 4 columns on large screens, etc.

### Updating Navigation Links

Edit the navigation in `client/src/pages/Home.tsx`:

```typescript
<a href="#" className="text-foreground/70 hover:text-accent transition-colors">
  About
</a>
```

Replace `#` with your actual URLs.

### Customizing Hero Section

The hero section text is in `client/src/pages/Home.tsx`:

```typescript
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
  Game Portal
</h2>
<p className="text-lg text-foreground/70 mb-8">
  Discover and play amazing games instantly...
</p>
```

Update the text and adjust font sizes as needed.

---

## Project Structure

```
game-portal-app/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          ← Main game portal page
│   │   ├── components/           ← Reusable UI components
│   │   ├── App.tsx              ← App routing
│   │   ├── index.css            ← Global styles & colors
│   │   └── main.tsx             ← React entry point
│   ├── public/
│   │   └── favicon.ico
│   └── index.html               ← HTML template
├── package.json                 ← Dependencies
└── server/                      ← Server config (static only)
```

---

## Performance Tips

1. **Image Optimization**: Use WebP format for game thumbnails
2. **Lazy Loading**: Images load as users scroll (built-in with modern browsers)
3. **Caching**: Vercel automatically caches static assets
4. **CDN**: All images are served through Vercel's global CDN

---

## Troubleshooting

### Games Not Loading
- Check that image URLs are valid HTTPS URLs
- Verify game URLs are correct and accessible
- Open browser console (F12) to see any errors

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Verify CSS variable names in `index.css`
- Check that Tailwind classes are spelled correctly

### Deployment Fails
- Ensure `package.json` is in the root directory
- Check that all dependencies are installed
- Verify Node.js version compatibility (v16+)

---

## Advanced Customization

### Adding Search/Filter
Add a search input and filter games by title or category.

### Dark/Light Theme Toggle
Implement theme switching using the `useTheme` hook already available in the template.

### Game Ratings
Add star ratings or user reviews for each game.

### Analytics
Track which games are most popular using Vercel Analytics.

### Responsive Images
Use `srcset` for different image sizes on different devices.

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Manus Docs**: https://docs.manus.im

---

## Next Steps

1. **Deploy to Vercel** using one of the methods above
2. **Add your games** to the GAMES array
3. **Customize colors** to match your brand
4. **Test on mobile** to ensure responsive design works
5. **Share your portal** with friends and gamers!

Enjoy your Game Portal! 🎮
