import {PhotoResponse} from "../models/apiResponse.ts";
import {PhotoRequest} from "../models/apiRequest.ts";
import {Photo} from "../models/photo.ts";

const apiKey = import.meta.env.VITE_PEXELS_KEY || "v5DTeDKM9G376q7UUjJa7tyAbzhwMGLfEwNwpnA6RYqIUPDveplXYCd1";

const options = {
    method: "GET",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": "Pexels/JavaScript",
        Authorization: apiKey,
    },
};

export const fetchPhotos = async ({page, per_page}: PhotoRequest): Promise<PhotoResponse> => {
    let url = "https://api.pexels.com/v1/curated";

    if (page || per_page) {
        url += '?';
        if (page) url += `page=${page}`;
        if (per_page) url += (page ? '&' : '') + `per_page=${per_page}`;
    }


    try {
        return await fetch(url, options).then(response => response.json());
    } catch (error) {
        throw new Error("Failed to fetch photos:" + error);
    }
}

export const getPhoto = async (photoId: number): Promise<Photo> => {
    const url = `https://api.pexels.com/v1/photos/${photoId}`;

    try {
        return await fetch(url, options).then(response => response.json());
    } catch (error) {
        throw new Error("Failed to fetch photo:" + error);
    }
}

export const getPhotos = async (photoIds: number[]): Promise<Photo[]> => {
    try {
        return await Promise.all(photoIds.map(photoId => getPhoto(photoId)));
    } catch (error) {
        throw new Error("Failed to fetch photos: " + error);
    }
};
