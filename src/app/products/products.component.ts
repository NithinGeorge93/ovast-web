import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  activeFilter: string = 'all';
  filters = [
    { name: 'All', value: 'all' },
    { name: 'Spice Products', value: 'spice products' },
    { name: 'Soft Drinks', value: 'soft drinks' }
  ];
  
  products = [
    { name: 'Product 1', category: 'spice products', image: './assets/images/Rectangle 24.png' },
    { name: 'Product 2', category: 'soft drinks', image: './assets/images/Rectangle 25.png' },
    { name: 'Product 3', category: 'spice products', image: './assets/images/Rectangle 26.png' },
    { name: 'Product 4', category: 'soft drinks', image: './assets/images/Rectangle 27.png' },
    { name: 'Product 5', category: 'spice products', image: './assets/images/Rectangle 28.png' },
    { name: 'Product 6', category: 'soft drinks', image: './assets/images/Rectangle 29.png' },
    { name: 'Product 7', category: 'spice products', image: './assets/images/Rectangle 30.png' },
    { name: 'Product 8', category: 'soft drinks', image: './assets/images/Rectangle 24.png' }
  ];

  setActiveFilter(filter: string) {
    this.activeFilter = filter;
  }

  isProductVisible(productCategory: string): boolean {
    return this.activeFilter === 'all' || productCategory === this.activeFilter;
  }
}
