import { SafeUrl } from "@angular/platform-browser";

export interface CityImage {
    imageId: number;
    cityId: number;
    imageName: string;
    image: string;
    primaryImage: boolean;
    header: string;
    description: string;
    safeUrl: SafeUrl;
}