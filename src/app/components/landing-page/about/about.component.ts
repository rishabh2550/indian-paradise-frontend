import { Component, OnInit } from '@angular/core';
import { AboutSection } from 'src/app/models/AboutSection';
import { ImagesService } from 'src/app/services/images-service/images.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutImg = 'assets/images/home/plain-landing.jpg';
  aboutSection: AboutSection | null = null;

  constructor(private imagesService: ImagesService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.imagesService.fetchAboutSectionDetails().subscribe(
      (data) => {
        const imageName = data.imageName;
        const image = data.image;
        data.safeUrl = this.imagesService.createImageUrl(imageName, image);
        this.aboutSection = data;
        this.imagesService.aboutSection = data;
        console.log('this.aboutSection: ', this.aboutSection);
      },
      (error) => {
        console.log('error in fetchAboutSectionDetails: ', error);
      }
    );
  }

}
