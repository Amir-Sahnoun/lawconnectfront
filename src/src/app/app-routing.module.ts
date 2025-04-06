import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ClientsComponent } from './clients/clients.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '/', component: AboutComponent,
    children: [{
      path:'/'
    }]
  }
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/about' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
