# Wartech Sol - Professional Software Solutions Website

A modern, responsive, and animated website built with React.js and Tailwind CSS for Wartech Sol software company.

## Features

- **Modern Design**: Clean, professional, and futuristic UI design
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **Animated**: Smooth animations using Framer Motion
- **Dark Mode**: Toggle between light and dark themes
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Pages

- **Home**: Hero section, services preview, stats, and call-to-action
- **About**: Company story, mission, vision, values, timeline, and team
- **Services**: Complete service listings with detailed subpages
- **Portfolio**: Project showcase with filtering and animations
- **Pricing**: Professional pricing plans with features
- **Blog**: Modern blog section for company updates
- **Careers**: Job listings and company culture
- **Contact**: Contact form, information, and FAQ

## Technologies Used

- **React.js**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Router**: Client-side routing
- **Lucide React**: Modern icon library
- **Vite**: Build tool and development server

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd wartechsol
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation component
│   └── Footer.jsx      # Footer component
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── About.jsx       # About page
│   ├── Services.jsx    # Services page
│   ├── ServiceDetail.jsx # Individual service pages
│   ├── Portfolio.jsx   # Portfolio page
│   ├── Pricing.jsx     # Pricing page
│   ├── Blog.jsx        # Blog page
│   ├── Careers.jsx     # Careers page
│   └── Contact.jsx     # Contact page
├── hooks/              # Custom React hooks
│   └── useDarkMode.js  # Dark mode functionality
├── data/               # Static data
│   └── services.js     # Services, portfolio, team data
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`. You can modify the primary and secondary colors to match your brand.

### Content

All content is stored in `src/data/services.js`. Update this file to change:
- Services and their details
- Portfolio projects
- Team members
- Pricing plans
- Job openings

### Styling

The website uses Tailwind CSS for styling. Custom components are defined in `src/index.css`.

## Features in Detail

### Animations

- Smooth page transitions
- Hover effects on cards and buttons
- Scroll-triggered animations
- Loading animations

### Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface

### Dark Mode

- System preference detection
- Manual toggle
- Persistent user preference

### Performance

- Optimized images
- Lazy loading
- Minimal bundle size
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- Email: info@wartechsol.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by Wartech Sol