# BubblaV Angular Starter Template

A fast, beautiful Angular starter template showcasing the [BubblaV AI Chatbot](https://www.bubblav.com). This template demonstrates how to integrate intelligent customer support into your Angular application.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbubblav-org%2Fangular-template&env=ANGULAR_PUBLIC_BUBBLAV_WEBSITE_ID&envDescription=Website%20ID%20from%20BubblaV%20dashboard)

## Live Demo

- **Angular**: https://bubblav-angular-template.vercel.app

## Features

- ⚡️ **Angular 21** with TypeScript and standalone components
- 🎨 **Tailwind CSS** with CSS variable theming for light/dark modes
- 🌙 **Dark/Light Theme** - Automatic switching with localStorage persistence
- 🤖 **BubblaV AI Chatbot** - No-code integration with the @bubblav/ai-chatbot-angular SDK
- 🧩 **shadcn-style Components** - Production-ready, accessible components with HSL colors
- 🎭 **Smooth animations** - Vercel-inspired micro-interactions
- 📱 **Responsive design** - Mobile-first approach for all screen sizes
- ♿ **Accessible** - WCAG compliant components
- 🎨 **Modern UI** - Clean, minimal aesthetic inspired by Vercel

## Quick Start

### Deploy to Vercel

Click the button above to deploy this template to Vercel in one click.

### Run Locally

```bash
# Install dependencies
npm install

# Run development server
npm run start

# Build for production
npm run build

# Watch for changes
npm run watch
```

Open [http://localhost:4200](http://localhost:4200) to see the result.

## Setting Up BubblaV Chatbot

### Environment Variable

1. Sign up at [bubblav.com](https://www.bubblav.com)
2. Create a website and get your **Website ID** from the dashboard
3. Set the environment variable (for local development, create `.env`):

```bash
ANGULAR_PUBLIC_BUBBLAV_WEBSITE_ID=your-website-id-here
```

For Vercel deployment, add this as an environment variable in your project settings.

### How It Works

The chatbot widget is automatically embedded in the page via the `@bubblav/ai-chatbot-angular` component in `app.component.ts`. Once you set the Website ID, the widget will appear in the bottom-right corner of your site.

### Customizing Widget Behavior

To programmatically control the chatbot (e.g., open it on a button click), inject the `BubblaVWidgetService`:

```typescript
import { BubblaVWidgetService } from '@bubblav/ai-chatbot-angular';

constructor(private widgetService: BubblaVWidgetService) {}

openChat() {
  this.widgetService.open();
}
```

The Header component in this template includes a theme toggle and an "Ask AI" button that demonstrates this integration.

## Documentation

- [BubblaV Documentation](https://docs.bubblav.com)
- [Installation Guide](https://docs.bubblav.com/user-guide/installation)
- [SDK Reference](https://docs.bubblav.com/developer-guide/sdk-reference)
- [Integrations](https://www.bubblav.com/integrations)

## Customization

### Theme Colors

This template uses CSS custom properties (variables) with HSL values for flexible theming. Edit `src/styles.css` to customize the color scheme:

```css
:root {
  /* Light mode colors (HSL format) */
  --background: 0 0% 100%;
  --foreground: 0 0% 9%;
  --primary: 221 83% 53%;
  --primary-foreground: 210 40% 98%;
  /* ... more color tokens ... */
}

.dark {
  /* Dark mode colors - override values here */
  --background: 222 84% 5%;
  --foreground: 210 40% 98%;
  --primary: 217 91% 60%;
  /* ... */
}
```

All colors use HSL (`hue saturation% lightness%`) for better theme switching. Use these variables in Tailwind classes like `bg-primary text-foreground`.

### Styling

The template follows these design principles:
- **Clean, minimal aesthetic** - Vercel-inspired design language
- **Responsive breakpoints** - Mobile-first approach (sm, md, lg, 2xl)
- **Dark/light mode support** - Automatic theme switching via CSS variables
- **Smooth animations** - Subtle transitions and micro-interactions
- **Accessible components** - WCAG compliant

## Tech Stack

### Frontend
- [**Angular 21**](https://angular.dev/) - Latest Angular with standalone components
- [**TypeScript**](https://www.typescriptlang.org/) - Type-safe JavaScript
- [**Tailwind CSS**](https://tailwindcss.com/) - Utility-first CSS framework with CSS variables

### Theming & UX
- **CSS Custom Properties** - Light/dark mode switching with localStorage persistence
- **shadcn-style Design** - HSL color tokens for consistent theming

### AI & Chat
- [**@bubblav/ai-chatbot-angular**](https://www.npmjs.com/package/@bubblav/ai-chatbot-angular) - Chatbot SDK with no-code integration

## Project Structure Reference

```
src/
├── app/
│   ├── components/
│   │   ├── header.component.ts       # Main navigation with theme toggle and "Ask AI" button
│   │   └── theme-toggle.component.ts # Dark/light mode switcher
│   └── app.component.ts              # Root component with hero, features, and CTA sections
├── styles.css                        # CSS variables, global styles, and theme definitions
├── main.ts                           # Application bootstrap
└── index.html                        # HTML entry point

angular.json                          # Angular CLI configuration
tailwind.config.js                    # Tailwind CSS configuration with theme tokens
tsconfig.json                         # TypeScript configuration
package.json                          # Dependencies and scripts
```

## License

MIT

## Support & Resources

### For Users
- [BubblaV Website](https://www.bubblav.com) - Product information
- [BubblaV Documentation](https://docs.bubblav.com) - Setup and API docs
- [GitHub Issues](https://github.com/bubblav-org/angular-template/issues) - Report bugs or suggest features
- [Contact BubblaV](https://www.bubblav.com/contact) - Sales and support inquiry

### For Developers
- [CLAUDE.md](./CLAUDE.md) - Development guide and architecture
- [Angular Documentation](https://angular.dev/) - Framework docs
- [Tailwind CSS Docs](https://tailwindcss.com/docs/) - Styling reference

---

Made with ❤️ by [BubblaV](https://www.bubblav.com)
