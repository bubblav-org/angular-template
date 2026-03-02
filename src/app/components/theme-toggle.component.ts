import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="buttonClass()"
      (click)="toggleTheme()"
      [attr.aria-label]="'Switch to ' + (isDark() ? 'light' : 'dark') + ' theme'"
    >
      @if (isDark()) {
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      } @else {
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      }
      <span class="sr-only">Toggle theme</span>
    </button>
  `,
  styles: []
})
export class ThemeToggleComponent {
  private isDarkSignal = signal<boolean>(false);

  constructor() {
    // Check for saved theme preference or system preference
    if (typeof document !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.isDarkSignal.set(savedTheme === 'dark' || (!savedTheme && systemPrefersDark));
      this.applyTheme(this.isDarkSignal());
    }
  }

  isDark = computed(() => this.isDarkSignal());

  buttonClass = computed(() => {
    return [
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'hover:bg-muted',
      'h-8 w-8'
    ].join(' ');
  });

  toggleTheme(): void {
    const newTheme = this.isDarkSignal() ? 'light' : 'dark';
    this.isDarkSignal.set(!this.isDarkSignal());
    this.applyTheme(this.isDarkSignal());
  }

  private applyTheme(isDark: boolean): void {
    if (typeof document !== 'undefined') {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }
}
