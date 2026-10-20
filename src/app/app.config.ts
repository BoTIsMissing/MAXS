import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { LucideAngularModule, Database, Cloud, Laptop, MonitorCog } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'servicos/banco-de-dados',
        loadComponent: () =>
          import('./pages/banco-de-dados/banco-de-dados.component').then(
            m => m.BancoDeDadosComponent
          ),
      },
      {
        path: 'servicos/cloud-solutions',
        loadComponent: () =>
          import('./pages/cloud-solutions/cloud-solutions.component').then(
            m => m.CloudSolutionsComponent
          ),
      },
      {
        path: 'servicos/desenvolvimento',
        loadComponent: () =>
          import('./pages/desenvolvimento/desenvolvimento.component').then(
            m => m.DesenvolvimentoComponent
          ),
      },
      {
        path: 'servicos/business-intelligence',
        loadComponent: () =>
          import('./pages/business-intelligence/business-intelligence.component').then(
            m => m.BusinessIntelligenceComponent
          ),
      },
      { path: '**', redirectTo: '' },
    ]),
    provideAnimations(),
    importProvidersFrom(
      LucideAngularModule.pick({ Database, Cloud, Laptop, MonitorCog })
    ),
  ],
};
