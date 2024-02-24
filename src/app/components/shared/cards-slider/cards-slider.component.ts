import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CardImage } from 'src/app/models/CardImage';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

@Component({
  selector: 'app-cards-slider',
  templateUrl: './cards-slider.component.html',
  styleUrls: ['./cards-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardsSliderComponent implements OnInit {

  @Input() cardImages!: CardImage[];

  ngOnInit() {
    console.log('this.cardImages ', this.cardImages);
  }

  constructor() {

  }

  clickCard(selectedCard: CardImage) {
    console.log('card clicked ', selectedCard);
  }

}
