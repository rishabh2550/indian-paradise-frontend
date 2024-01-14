import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images-service/images.service';
import { HomeCarousel } from '../../../models/HomeCarousel';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  public homeCarousel: HomeCarousel[] = [];

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.imagesService.fetchAllHomeCarouselImages().subscribe(
      (data) => {
        this.imagesService.homeCarousel = data;
        this.createImageUrls();
        this.homeCarousel = this.imagesService.homeCarousel;
        console.log('this.homeCarousel: ', this.homeCarousel);
      },
      (error) => {
        console.error('error in fetchAllHomeCarouselImages: ', error);
      }
    );
  }

  private createImageUrls() {
    for(let i=0; i<this.imagesService.homeCarousel.length; i++) {
      const imageName = this.imagesService.homeCarousel[i].imageName;
      const bytes = this.imagesService.homeCarousel[i].image;
      this.imagesService.homeCarousel[i].safeUrl = this.imagesService.createImageUrl(imageName, bytes);
    }
  }

}
