import {PhotoResponse} from "../models/apiResponse.ts";
import {PhotoRequest} from "../models/apiRequest.ts";

const apiKey = import.meta.env.VITE_PEXELS_KEY;


export const fetchPhotos = async ({page,per_page}:PhotoRequest): Promise<PhotoResponse> => {
    let url = "https://api.pexels.com/v1/curated";

    if (page || per_page) {
        url += '?';
        if (page) url += `page=${page}`;
        if (per_page) url += (page ? '&' : '') + `per_page=${per_page}`;
    }



    const options = {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "User-Agent": "Pexels/JavaScript",
            Authorization: apiKey,
        },
    };

    try {
        return await fetch(url,options).then(response => response.json());
    } catch (error) {
        throw new Error("Failed to fetch photos:" + error);
    }
}