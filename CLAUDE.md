# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Angular 21 starter template** showcasing the BubblaV AI Chatbot integration. It serves as a minimal, beautiful starting point for developers who want to add intelligent customer support to their Angular applications.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (port 4200)
npm run start

# Production build
npm run build

# Watch for changes
npm run watch

# Run tests
npm run test
```

## Environment Setup

The following environment variable is required for the chatbot to work:

```bash
# .env (for local development)
ANGULAR_PUBLIC_BUBBLAV_WEBSITE_ID=your-website-id-here
```

Get your Website ID from the [BubblaV dashboard](https://www.bubblav.com/dashboard).

## Tech Stack

- **Angular 21** with standalone components and TypeScript
- **Tailwind CSS** for styling with CSS variables for theming
- **@bubblav/ai-chatbot-angular** - Chatbot SDK integration

## Architecture

### Configuration Files
- `angular.json` - Main Angular configuration with build, serve, and test targets
- `tailwind.config.js` - Tailwind with shadcn-style design tokens (HSL CSS variables)
- `tsconfig.json` - TypeScript configuration with strict mode enabled
- `tsconfig.app.json` - Application-specific TypeScript configuration

### Theming System
The project uses CSS custom properties (variables) for a flexible theming system:

- **CSS Variables Location**: `src/styles.css`
- **Light Mode**: `:root` selector defines default HSL values
- **Dark Mode**: `.dark` class selector overrides values
- **Color Tokens**: `--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--card`, `--popover`, plus foreground variants
- **Border Radius**: `--radius` variable for consistent corner rounding

The `ThemeToggleComponent` automatically:
- Manages light/dark mode switching
- Applies the `dark` class to the `<html>` element when needed
- Persists user preference to `theme` localStorage key
- Falls back to system preference if no user setting exists

### Project Structure
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

public/
└── logos/
    └── bubblav.png                   # BubblaV logo

angular.json                          # Angular CLI configuration
tailwind.config.js                    # Tailwind CSS configuration with theme tokens
tsconfig.json                         # TypeScript configuration
package.json                          # Dependencies and scripts
```

### Component Architecture
- **Standalone Components**: All components use Angular's standalone API (no NgModules)
- **Signal-based State**: ThemeToggleComponent uses Angular signals for reactive state
- **Dependency Injection**: HeaderComponent injects BubblaVWidgetService for chatbot control
- **Theming**: ThemeToggleComponent controls color mode and persists preference to localStorage

## BubblaV Integration

The chatbot widget is integrated through the `@bubblav/ai-chatbot-angular` package:

**In app.component.ts:**
```typescript
import { BubblaVWidgetComponent } from '@bubblav/ai-chatbot-angular';

@Component({
  imports: [BubblaVWidgetComponent],
  template: `
    @if (websiteId) {
      <bubblav-widget [websiteId]="websiteId" />
    }
  `
})
export class AppComponent {
  websiteId = process.env['ANGULAR_PUBLIC_BUBBLAV_WEBSITE_ID'] || '';
}
```

**In header.component.ts:**
```typescript
import { BubblaVWidgetService } from '@bubblav/ai-chatbot-angular';

@Component({})
export class HeaderComponent {
  private widgetService = inject(BubblaVWidgetService);

  openChat(): void {
    this.widgetService.open();
  }
}
```

**Key Details:**
- Website ID comes from the `ANGULAR_PUBLIC_BUBBLAV_WEBSITE_ID` environment variable
- The widget renders automatically when a Website ID is configured
- Use `BubblaVWidgetService` to programmatically control the widget (open/close)

## Design Patterns & Standards

### Color System
- Always use `hsl(var(--token))` format in Tailwind classes, never hardcoded hex values
- This ensures colors automatically respond to theme changes (light/dark mode)
- Example: `bg-primary text-primary-foreground` not `bg-blue-500 text-white`

### Components
- All components are standalone (no NgModules)
- Use Angular signals for reactive state management
- Keep individual component files under 200 lines for optimal context management
- Use inline templates and styles for simple components

### Utility Functions
- Place reusable utilities in dedicated service files
- Use Angular's built-in dependency injection for shared services

### Class Names
- Use Tailwind's utility-first approach
- Leverage CSS variables for theming: `bg-background text-foreground`
- Use conditional classes with Angular's `[class]` binding

## Deployment

### Deploy to Vercel (Recommended)
1. Push code to a Git repository (GitHub)
2. Go to [vercel.com](https://vercel.com)
3. Import the project and set `ANGULAR_PUBLIC_BUBBLAV_WEBSITE_ID` in Environment Variables
4. Vercel auto-detects Angular and deploys automatically

**One-Click Deploy Button**: The app.component.ts includes a Vercel deployment button for quick cloning and deployment.

### Local Preview
```bash
npm run build
npx http-server dist/angular-template/browser
```

## Common Tasks

### Updating the Landing Page
Edit `src/app/app.component.ts` to modify the hero section, features, and CTA sections. All styling uses Tailwind classes with CSS variable tokens.

### Adding New Components
Use Angular CLI to generate new standalone components:
```bash
ng generate component components/my-component --standalone --skip-tests
```

Or manually create a component file:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  template: `...`,
  styles: []
})
export class MyComponent {}
```

### Customizing Theme Colors
Edit `src/styles.css` to change HSL color values. Both `:root` (light mode) and `.dark` (dark mode) selectors can be customized.

### Adding Routes
For routing, import `provideRouter` in `src/main.ts`:
```typescript
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
});
```

## Troubleshooting

- **Chatbot not appearing?** Check that `ANGULAR_PUBLIC_BUBBLAV_WEBSITE_ID` is set in environment variables
- **Theme toggle not working?** Ensure the `dark` class is being applied to the `<html>` element
- **Components not showing?** Verify they're imported in the parent component's `imports` array (standalone components)
- **Tailwind classes not applying?** Verify colors use `hsl(var(--token))` format in `tailwind.config.js`
- **Build errors?** Ensure all standalone components are properly imported where used

## Angular 21 Specific Notes

- Uses the new `application` builder (not `browser`)
- Standalone components by default (no NgModules)
- Signal-based reactivity preferred over RxJS for simple state
- Zone.js still required for change detection
- TypeScript 5.6+ with strict mode enabled
