import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { provideMarkdown } from 'ngx-markdown';
import { provideRouter } from '@angular/router';
import { mainRoutes } from './shared/routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(mainRoutes),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js'),
    }),
    provideMarkdown(),
  ],
};
