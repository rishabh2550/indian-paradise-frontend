import { Injectable } from '@angular/core';
import { HomeCarousel } from '../../models/HomeCarousel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { AboutSection } from 'src/app/models/AboutSection';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  apiUrl = 'http://localhost:2001';
  homeCarousel: HomeCarousel[] = [];
  aboutSection: AboutSection | null = null;

  constructor(private http: HttpClient,
              private domSanitizer: DomSanitizer) { }

  public fetchAllHomeCarouselImages(): Observable<HomeCarousel[]> {
    return this.http.get<HomeCarousel[]>(`${this.apiUrl}/fetchAllHomeCarouselImages`);
  }

  public fetchAboutSectionDetails(): Observable<AboutSection> {
    return this.http.get<AboutSection>(`${this.apiUrl}/fetchAboutSectionDetails`);
  }

  public createImageUrl(imageName: string, bytes: string) {
    const byteString = window.atob(bytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for(let i=0; i<byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([int8Array], {type: 'image/jpeg'});

    const file = new File([blob], imageName, {type: 'image/jpeg'});

    return this.domSanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
  }

}
