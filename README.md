# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design** - Beautiful gradient backgrounds and smooth animations
- 🌙 **Dark Mode** - Toggle between light and dark themes with preference persistence
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Fast Performance** - Built with Next.js 14 App Router for optimal performance
- 🎭 **Smooth Animations** - Fade-in and slide-up animations using Framer Motion
- 📧 **Contact Form** - Fully functional contact form with validation
- 🔗 **Social Links** - GitHub, LinkedIn, and Twitter integration

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form
│   ├── DarkModeToggle.tsx # Dark mode toggle
│   ├── FadeInUp.tsx     # Animation component
│   ├── Footer.tsx       # Footer component
│   ├── Hero.tsx         # Hero section
│   ├── Navbar.tsx       # Navigation bar
│   └── Projects.tsx     # Projects grid
├── hooks/
│   └── useDarkMode.ts   # Dark mode hook
└── public/              # Static assets
```

## Customization

### Update Your Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and taglines

2. **About Section** (`components/About.tsx`):
   - Modify bio and skills list

3. **Projects** (`components/Projects.tsx`):
   - Replace with your actual projects
   - Update project images, descriptions, and links

4. **Contact** (`components/Contact.tsx`):
   - Update email address and social media links

5. **Footer** (`components/Footer.tsx`):
   - Update social media profile URLs

### Styling

The project uses Tailwind CSS. Modify colors and styles in:
- `tailwind.config.ts` - Theme configuration
- Component files - Individual component styles

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is open source and available under the MIT License.

## Author

Terrence Burris - Police Inspector & Web Developer

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
