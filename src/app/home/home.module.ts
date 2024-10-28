import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routes } from './home.routes';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeLandingComponent } from './components/home-landing/home-landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeTechComponent } from './components/home-tech/home-tech.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { HomeAboutComponent } from './components/home-about/home-about.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeHeaderComponent,
    HomeLandingComponent,
    HomeTechComponent,
    HomeFooterComponent,
    HomeAboutComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FontAwesomeModule],
})
export class HomeModule {}
