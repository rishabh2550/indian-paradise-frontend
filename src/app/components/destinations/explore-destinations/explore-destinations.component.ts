import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

@Component({
  selector: 'app-explore-destinations',
  templateUrl: './explore-destinations.component.html',
  styleUrls: ['./explore-destinations.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ExploreDestinationsComponent implements OnInit {

  windowWidth: number = 0;
  cardsPerView: number = 4;

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth > 768) {
      this.cardsPerView = 4;
    }else if (this.windowWidth <= 320) {
      this.cardsPerView = 2;
    }else {
      this.cardsPerView = 3;
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth > 912) {
      this.cardsPerView = 4;
    }else if (this.windowWidth <= 320) {
      this.cardsPerView = 2;
    }else {
      this.cardsPerView = 3;
    }
  }

}
