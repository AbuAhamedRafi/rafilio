# 🚀 Abu Ahamed Rafi - Modern Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. This portfolio showcases my projects, experience, skills, and achievements as a Software Engineer.

![Portfolio Preview](./public/photo.jpg)

## ✨ Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)  
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **SEO Friendly**: Proper meta tags and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Error Handling**: Custom error boundaries and 404 page
- **Theme Persistence**: User's theme preference is saved and restored

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### UI & UX
- **Heroicons** - Beautiful SVG icons
- **React Icons** - Additional icon library
- **React Hot Toast** - Elegant notifications
- **React Helmet Async** - Document head management

### Developer Experience
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

### Deployment
- **GitHub Pages** - Static site hosting
- **Custom Domain** - Professional domain setup

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbuAhamedRafi/rafilio.git
   cd rafilio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📁 Project Structure

```
rafilio/
├── public/                 # Static assets
│   ├── favicon.png        # Favicon
│   ├── photo.jpg          # Profile photo
│   └── certificates/      # Certificate images
├── src/
│   ├── components/        # Reusable components
│   │   ├── sections/      # Page sections
│   │   ├── ErrorBoundary.jsx
│   │   ├── Loading.jsx
│   │   ├── Project.jsx
│   │   └── Fade.jsx
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.jsx
│   ├── hooks/             # Custom hooks
│   │   └── useTheme.js
│   ├── pages/             # Page components
│   │   ├── Homepage.jsx
│   │   └── 404.jsx
│   ├── utils/             # Utility functions
│   │   ├── cn.js          # Class name utility
│   │   └── helpers.js     # Helper functions
│   ├── data/              # Data files
│   │   └── user_info.js   # Portfolio data
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Personal Information
Update your personal information in `src/data/user_info.js`:

```javascript
const info = {
    main: {
        name: "Your Name",
        description: "Your description...",
        role: "Your Role",
        photo: "../your-photo.jpg",
        email: "your-email@example.com",
    },
    socials: {
        // Your social links
    },
    projects: [
        // Your projects
    ],
    // ... other sections
};
```

### Theme Colors
Customize the color scheme in `tailwind.config.js`:

```javascript
theme: {
    extend: {
        colors: {
            primary: {
                // Your custom colors
            }
        }
    }
}
```

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import and add it to `src/pages/Homepage.jsx`
3. Update the navigation in `src/components/sections/Navbar.jsx`

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Update package.json** (already configured)
   ```json
   {
     "homepage": "https://yourusername.github.io/yourrepo",
     "scripts": {
       "deploy": "vite build && gh-pages -d dist"
     }
   }
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

### Other Platforms

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **Custom Server**: Upload the `dist` folder contents

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and improvements:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Abu Ahamed Rafi**
- Website: [abuahamedrafi.me](https://abuahamedrafi.me)
- GitHub: [@AbuAhamedRafi](https://github.com/AbuAhamedRafi)
- LinkedIn: [abu-ahamed-rafi](https://www.linkedin.com/in/abu-ahamed-rafi/)
- Email: abuahamedrafi@gmail.com

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - For beautiful animations
- [Heroicons](https://heroicons.com/) - For the beautiful icons
- [Vite](https://vitejs.dev/) - For the fast build tool

---

**⭐ Star this repo if you found it helpful!**
