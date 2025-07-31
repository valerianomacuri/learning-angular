import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { provideMarkdown } from 'ngx-markdown';
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
} from '@angular/router';
import { mainRoutes } from './shared/routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      mainRoutes,
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding(),
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
    }),
    provideHttpClient(),
    provideMarkdown(),
  ],
};
