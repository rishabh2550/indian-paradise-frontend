import { SafeUrl } from "@angular/platform-browser";

export interface HomeCarousel {
    imageId: number;
    imageName: string;
    image: string;
    header: string;
    description: string;
    safeUrl: SafeUrl;
}