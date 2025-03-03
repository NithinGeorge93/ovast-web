import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  navOpen = false;
  isScrolled = false;
  isScrollingDown = false; // Track scrolling direction
  currentUrl: string = '';
  previousScrollPosition = 0; // Store previous scroll position

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.urlAfterRedirects;
        console.log('Current URL:', this.currentUrl);
      }
    });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const offset = window.scrollY || document.documentElement.scrollTop;
    console.log('Scroll position:', offset);

    if (this.currentUrl.includes('/about')) {
      if (offset > this.previousScrollPosition && offset > 150) {
        this.isScrolled = true;  // Scrolling down beyond 150px → Remove class
        this.isScrollingDown = true;
      } else if (offset < this.previousScrollPosition && offset < 150) {
        this.isScrolled = false; // Scrolling up within 150px → Add class
        this.isScrollingDown = false;
      }
    }

    this.previousScrollPosition = offset; // Update previous scroll position
  }

  isActiveRoute(route: string): boolean {
    return this.currentUrl === route;
  }

  getClassForUrl(): string {
    if (this.currentUrl.includes('/about')) {
      return this.isScrolled ? 'hide-header' : 'about-us';
    }
    return 'default-class';
  }

  openMenu() {
    this.navOpen = true;
  }

  closeMenu() {
    this.navOpen = false;
  }
}
