import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, AboutComponent, ContactComponent],
  template: `
    <main>
      <app-hero />
      <app-services />
      <app-about />
      <app-contact />
    </main>
  `,
})
export class HomeComponent {}
