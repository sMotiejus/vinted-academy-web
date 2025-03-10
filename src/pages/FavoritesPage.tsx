import {Photo} from "../models/photo.ts";
import Gallery from "../components/gallery/Gallery.tsx";
import {useEffect, useRef, useState} from "react";
import {getArrayFromLocalStorage, removeFromArrayInLocalStorage} from "../utils/localStorage.ts";
import {localStorageFavoritedPhotosKey} from "../config.ts";
import {getPhotos} from "../services/api.ts";

const FavoritesPage = () => {
    const [favoritedPhotos, setFavoritedPhotos] = useState<Photo[]>([]);
    const effectRan = useRef(false);

    useEffect(() => {
        if (!effectRan.current) {
            const photosIds = getArrayFromLocalStorage(localStorageFavoritedPhotosKey);
            getFavoritedPhotos(photosIds)
            effectRan.current = true;
        }
    }, []);

    const getFavoritedPhotos = (photosIds: number[]) => {
        getPhotos(photosIds)
            .then(photos => {
                setFavoritedPhotos(photos);
            })
    }

    const unfavoritedHandler = (id: number) => {
        setFavoritedPhotos(favoritedPhotos.filter(photo => photo.id !== id));
        removeFromArrayInLocalStorage(localStorageFavoritedPhotosKey, id)
    }

    return (
        <Gallery photos={favoritedPhotos} unfavoritedHandler={unfavoritedHandler}/>
    );
};

export default FavoritesPage;