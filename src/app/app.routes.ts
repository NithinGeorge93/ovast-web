import { Routes } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import { AboutComponent }  from './about/about.component';
import { ServicesComponent }  from './services/services.component';
import { ProductsComponent }  from './products/products.component';
import { ContactUsComponent }  from './contact-us/contact-us.component';
import { BlogComponent }  from './blog/blog.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'about', component: AboutComponent }
];
