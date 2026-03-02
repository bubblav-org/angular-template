import { Component } from '@angular/core';
import { ThemeToggleComponent } from './theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ThemeToggleComponent],
  template: `
    <header class="border-b border-border/50 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div class="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="https://www.bubblav.com" target="_blank" rel="noopener" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="logos/bubblav.png" alt="BubblaV" class="h-6 w-6" />
          <span class="font-semibold text-sm hidden sm:inline">BubblaV</span>
        </a>
        <nav class="flex items-center gap-6 text-sm">
          <a href="https://www.bubblav.com/integrations" target="_blank" rel="noopener" class="transition-colors hover:text-foreground text-foreground/70">
            Integrations
          </a>
          <a href="https://docs.bubblav.com" target="_blank" rel="noopener" class="transition-colors hover:text-foreground text-foreground/70">
            Docs
          </a>
          <a href="https://github.com/bubblav-org/angular-template" target="_blank" rel="noopener" class="transition-colors hover:text-foreground text-foreground/70">
            GitHub
          </a>
          <app-theme-toggle />
        </nav>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent {}
