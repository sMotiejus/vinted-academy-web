import {Photo} from "./photo.ts";

export interface PhotoResponse {
    photos: Photo[];
    url?: string;
    page: number;
    per_page: number;
    next_page: number;
}