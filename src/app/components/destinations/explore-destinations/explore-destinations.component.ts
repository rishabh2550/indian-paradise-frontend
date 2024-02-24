import { Component, OnInit } from '@angular/core';
import { CardImage } from 'src/app/models/CardImage';
import { CityImage } from 'src/app/models/CityImage';
import { ImagesService } from 'src/app/services/images-service/images.service';

@Component({
  selector: 'app-explore-destinations',
  templateUrl: './explore-destinations.component.html',
  styleUrls: ['./explore-destinations.component.scss']
})
export class ExploreDestinationsComponent implements OnInit {

  cityImages: CityImage[] = [];
  cardImages: CardImage[] = [];

  constructor(private imagesService: ImagesService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.imagesService.fetchPrimaryCityImages().subscribe(
      (data) => {
        this.imagesService.cityImages = data;
        this.createImageUrls();
        this.cityImages = this.imagesService.cityImages;
        console.log('this.cityImages ', this.cityImages);
        this.createCardImagesArray();
        console.log('this.cardImages ', this.cardImages);
      },
      (error) => {
        console.error('error in fetchPrimaryCityImages: ', error);
      });
  }

  private createImageUrls() {
    for(let i=0; i<this.imagesService.cityImages.length; i++) {
      const imageName = this.imagesService.cityImages[i].imageName;
      const bytes = this.imagesService.cityImages[i].image;
      this.imagesService.cityImages[i].safeUrl = this.imagesService.createImageUrl(imageName, bytes);
    }
  }

  private createCardImagesArray() {
    for(let i=0; i<this.cityImages.length; i++) {
      this.cardImages.push({
        imageName: this.cityImages[i].imageName,
        description: this.cityImages[i].description,
        safeUrl: this.cityImages[i].safeUrl
      });
    }
  }

}
