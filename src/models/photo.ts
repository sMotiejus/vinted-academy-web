export interface Photo {
    id: number;
    width: number;
    height: number;
    url: string;
    alt: string | null;
    avg_color: string | null;
    photographer: string;
    photographer_url: string;
    photographer_id: number;
    liked: boolean;
    src: PhotoSources;
}

export interface PhotoSources {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
}

export interface NeededPhotoSources {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
}

export interface ImageSize {
    src: string;
    width: number;
    height: number;
}