import { SafeUrl } from "@angular/platform-browser";

export interface AboutSection {
    id: number;
    imageName: string;
    image: string;
    header: string;
    description: string;
    safeUrl: SafeUrl;
}