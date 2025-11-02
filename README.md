# Akibworks - Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a vibrant blue theme with dark mode support and showcases web development services for local businesses.

## ✨ Features

- **🎨 Modern Design**: Clean, professional layout with vibrant blue theme
- **🌙 Dark Mode**: Toggle between light and dark themes with sun/moon icons
- **📱 Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds
- **🎯 Local Business Focus**: Tailored for small business clients (salons, shops, services)
- **🖼️ Reliable Images**: Fallback system prevents broken images
- **♿ Accessible**: Proper ARIA labels and semantic HTML

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/akibworks-react.git
cd akibworks-react

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Heroicons (SVG)
- **Fonts**: Inter + Poppins (Google Fonts)
- **Theme**: Context API for dark mode
- **Deployment**: GitHub Pages ready

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Navigation with dark mode toggle
│   ├── Hero.jsx        # Main hero section
│   ├── About.jsx       # About Akibworks
│   ├── Stats.jsx       # Statistics section
│   ├── Portfolio.jsx   # Project showcase
│   ├── Services.jsx    # Services offered
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Footer with social links
│   └── LazyImage.jsx   # Image component with fallback
├── context/
│   └── ThemeContext.jsx # Dark mode context
├── config/
│   └── site.js         # Site configuration
└── App.jsx             # Main app component
```

## ⚙️ Configuration

Update `src/config/site.js` with your details:

```javascript
export const SITE = {
  title: 'Akibworks',
  contactEmail: 'your-email@gmail.com',
  whatsappNumberIntl: '91XXXXXXXXXX', // International format without +
  socials: {
    linkedin: 'https://linkedin.com/in/your-profile',
    github: 'https://github.com/your-username',
    instagram: 'https://instagram.com/your-handle'
  }
}
```

## 🎨 Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Information about Akibworks and services
- **Stats**: Impressive statistics with icons
- **Portfolio**: Showcase of projects (coming soon badges)
- **Services**: List of offered services with icons
- **Contact**: Contact form and social links

## 🌐 Deployment

### GitHub Pages

1. **Create Repository**: Create a new repo on GitHub
2. **Push Code**: Push this project to the repository
3. **Enable Pages**: Go to Settings → Pages → Deploy from branch → `main`
4. **Custom Domain** (optional): Add your domain in Pages settings

### Build Commands

```bash
# For GitHub Pages subdirectory
$env:BASE_PATH='/akibworks-react/'; npm run build

# For custom domain or root
npm run build
```

## 🎯 Target Audience

This website targets local small business owners who need professional websites:
- Salon owners
- Mobile shop owners
- DJs and entertainers
- Hotel managers
- AC technicians
- Wine shop owners
- Other local service providers

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

- **Email**: akibworks@gmail.com
- **Website**: [Your deployed site URL]
- **GitHub**: [@your-username](https://github.com/your-username)
# AkibWorks-web
