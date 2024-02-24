import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageName'
})
export class ImageNamePipe implements PipeTransform {

  transform(imageName: string): string {
    return imageName.replace('.jpg', '').toUpperCase();
  }

}
