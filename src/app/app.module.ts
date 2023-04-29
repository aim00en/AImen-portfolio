import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WorkComponent } from './work/work.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactMeComponent,
    AboutMeComponent,
    WorkComponent,
    HobbiesComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
    ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
