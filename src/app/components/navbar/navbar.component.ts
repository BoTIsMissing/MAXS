import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  constructor(private router: Router) {}

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  scrollTo(id: string) {
    this.menuOpen.set(false);
    const doScroll = () =>
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

    if (this.router.url === '/') {
      doScroll();
    } else {
      this.router.navigate(['/']).then(() => setTimeout(doScroll, 120));
    }
  }
}
