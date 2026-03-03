import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { BubblaVWidgetComponent, BubblaVWidgetService } from '@bubblav/ai-chatbot-angular';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, BubblaVWidgetComponent],
  template: `
    <div class="min-h-screen bg-background">
      <app-header />

      <!-- Hero Section - Vercel-inspired clean hero -->
      <section class="relative overflow-hidden">
        <!-- Subtle background gradient -->
        <div class="absolute inset-0 -z-10">
          <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/5 opacity-20 blur-3xl dark:bg-primary/10"></div>
        </div>

        <div class="container flex max-w-screen-2xl items-center gap-6 py-24 md:py-32">
          <div class="mx-auto flex max-w-[42rem] flex-col items-center text-center">
            <div class="inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-3 py-1 text-xs text-muted-foreground mb-8">
              <span class="flex h-1.5 w-1.5 rounded-full bg-foreground mr-2 animate-pulse"></span>
              Angular 21 Starter Template
            </div>
            <h1 class="text-4xl font-bold tracking-tight sm:text-7xl text-foreground">
              Build AI Chatbots
              <span class="block text-foreground/60">in Minutes</span>
            </h1>
            <p class="mt-6 max-w-[42rem] leading-7 text-muted-foreground sm:text-lg">
              A fast, intelligent AI chatbot for your website. Deploy in 5 minutes with no coding required.
            </p>
            <div class="mt-10 flex flex-col gap-3 sm:flex-row items-center">
              <a
                href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbubblav-org%2Fangular-template&env=ANGULAR_PUBLIC_BUBBLAV_WEBSITE_ID&envDescription=Website%20ID%20from%20BubblaV%20dashboard"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 shadow-sm"
              >
                <svg
                  class="h-4 w-4"
                  viewBox="0 0 76 65"
                  fill="currentColor"
                >
                  <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
                </svg>
                <div class="w-px h-4 bg-primary-foreground/20 mx-1"></div>
                Deploy
              </a>
              <button
                (click)="openChat()"
                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border bg-background px-8 text-sm font-medium shadow-sm transition-all hover:bg-muted hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 shrink-0 h-11"
              >
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <div class="w-px h-4 bg-foreground/20 mx-1"></div>
                Ask AI
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Section - Vercel-inspired clean cards -->
      <section class="container py-24 max-w-screen-2xl">
        <div class="mx-auto max-w-[42rem] text-center mb-16">
          <h2 class="text-3xl font-bold tracking-tight sm:text-5xl">
            Everything you need
          </h2>
          <p class="mt-4 text-lg text-muted-foreground">
            Powerful features to automate customer support while keeping the human touch.
          </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <!-- Feature 1 -->
          <div class="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card hover:shadow-lg">
            <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">AI-Powered Intelligence</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              Powered by AI for fast, accurate responses that understand context and intent.
            </p>
          </div>

          <!-- Feature 2 -->
          <div class="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card hover:shadow-lg">
            <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Omni-Channel Support</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              Engage customers across Messenger, Discord, Slack, WhatsApp, and Instagram from one dashboard.
            </p>
          </div>

          <!-- Feature 3 -->
          <div class="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card hover:shadow-lg">
            <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Human Handoff</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              Seamlessly transfer complex conversations to your team with live support and context preservation.
            </p>
          </div>

          <!-- Feature 4 -->
          <div class="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card hover:shadow-lg">
            <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Powerful Integrations</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              Native integrations with Shopify, Zendesk, Zapier, Notion, and 5000+ apps. Works with your existing stack.
            </p>
          </div>

          <!-- Feature 5 -->
          <div class="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card hover:shadow-lg">
            <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Knowledge Base</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              Train on your website content, Notion, Zendesk, and more. RAG-powered accuracy for domain-specific queries.
            </p>
          </div>

          <!-- Feature 6 -->
          <div class="group rounded-xl border border-border/50 bg-card/50 p-6 transition-all hover:border-border hover:bg-card hover:shadow-lg">
            <div class="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/5">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="font-semibold mb-2">Analytics Dashboard</h3>
            <p class="text-muted-foreground text-sm leading-relaxed">
              Track conversations, resolution rates, and customer satisfaction. Data-driven insights to improve support.
            </p>
          </div>
        </div>
      </section>

      <!-- CTA Section - Vercel-inspired minimal CTA -->
      <section class="container py-24 max-w-screen-2xl">
        <div class="relative overflow-hidden rounded-2xl border border-border/50 bg-muted/30 p-12 text-center md:p-16">
          <!-- Subtle decorative elements -->
          <div class="absolute inset-0 -z-10">
            <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          </div>
          <div class="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-foreground/5 blur-3xl dark:bg-foreground/10"></div>
          <div class="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-foreground/5 blur-3xl dark:bg-foreground/10"></div>

          <div class="relative z-10">
            <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to get started?
            </h2>
            <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of businesses using BubblaV to provide instant, intelligent support 24/7.
            </p>
            <div class="mt-10 flex flex-col gap-3 sm:flex-row justify-center">
              <a href="https://www.bubblav.com/dashboard" target="_blank" rel="noopener" class="inline-flex h-11 items-center justify-center rounded-md bg-foreground px-8 text-sm font-medium text-background shadow transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2">
                Get Started
              </a>
              <a href="https://docs.bubblav.com" target="_blank" rel="noopener" class="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-8 text-sm font-medium shadow-sm transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2">
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer - Vercel-inspired clean footer -->
      <footer class="border-t border-border/50 bg-muted/20 py-12">
        <div class="container max-w-screen-2xl">
          <div class="grid gap-8 md:grid-cols-4">
            <!-- Brand -->
            <div class="space-y-3">
              <a href="https://www.bubblav.com" target="_blank" rel="noopener" class="flex items-center gap-2">
                <img src="logos/bubblav.png" alt="BubblaV" class="h-5 w-5" />
                <span class="font-semibold text-sm">BubblaV</span>
              </a>
              <p class="text-sm text-muted-foreground">
                AI-powered customer support for modern businesses.
              </p>
            </div>

            <!-- Product -->
            <div>
              <h3 class="font-semibold text-sm mb-3">Product</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="https://www.bubblav.com" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="https://www.bubblav.com/pricing" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="https://www.bubblav.com/integrations" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Integrations</a></li>
              </ul>
            </div>

            <!-- Resources -->
            <div>
              <h3 class="font-semibold text-sm mb-3">Resources</h3>
              <ul class="space-y-2 text-sm">
                <li><a href="https://docs.bubblav.com" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="https://github.com/bubblav-org/angular-template" target="_blank" rel="noopener" class="text-muted-foreground hover:text-foreground transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          <div class="mt-12 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {{ currentYear }} BubblaV. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <!-- BubblaV Chatbot Component -->
      @if (websiteId) {
        <bubblav-widget [websiteId]="websiteId" />
      }
    </div>
  `,
  styles: []
})
export class AppComponent {
  websiteId: string = environment.bubblavWebsiteId;
  currentYear = new Date().getFullYear();
  private widgetService = inject(BubblaVWidgetService);

  openChat(): void {
    this.widgetService.open();
  }
}
