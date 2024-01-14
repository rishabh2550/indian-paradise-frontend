import { Component, OnInit } from '@angular/core';
import { HomeCarousel } from 'src/app/models/HomeCarousel';
import { ImagesService } from 'src/app/services/images-service/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {}
  
  ngOnInit(): void {
    
  }

}
