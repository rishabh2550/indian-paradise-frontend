import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CarouselComponent } from './components/landing-page/carousel/carousel.component';
import { ExploreDestinationsComponent } from './components/destinations/explore-destinations/explore-destinations.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/landing-page/about/about.component';
import { ContentComponent } from './components/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReadMoreComponent } from './components/shared/read-more/read-more.component';
import { SwiperModule } from 'swiper/angular';
import { ImageNamePipe } from './pipes/image-name/image-name.pipe';
import { CardsSliderComponent } from './components/shared/cards-slider/cards-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    ExploreDestinationsComponent,
    HomeComponent,
    AboutComponent,
    ContentComponent,
    ReadMoreComponent,
    ImageNamePipe,
    CardsSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
