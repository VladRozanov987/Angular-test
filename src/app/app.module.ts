// Imports | Angular
// __________________________________________________
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

// Imports | Swiper JS
// __________________________________________________
import { SwiperModule } from 'swiper/angular';

// Imports | Components
// __________________________________________________
import { AppComponent } from './app.component';
// Header
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
// Main
import { MainComponent } from './main/main.component';
import { NewprodComponent } from './main/newprod/newprod.component';
import { HeroComponent } from './main/hero/hero.component';
import { CouterComponent } from './main/counter/counter.component';
import { WedoComponent } from './main/wedo/wedo.component';
import { SliderComponent } from './main/slider/slider.component';
import { FormComponent } from './main/form/form.component';
// Footer
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    NewprodComponent,
    HeroComponent,
    CouterComponent,
    WedoComponent,
    SliderComponent,
    FormComponent,
    FooterComponent,],

  imports: [
    BrowserModule,
    SwiperModule,
    FormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }