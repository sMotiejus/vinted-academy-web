import {useEffect, useState} from "react";

import {Photo} from "../models/photo.ts";
import Gallery from "../components/gallery/Gallery.tsx";
import InfiniteScrollWrapper from "../components/infiniteScrollWrapper/InfiniteScrollWrapper.tsx";

const HomePage = () => {

    const [allPhotos, setAllPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Scroll to top if refreshed and you have scrolled
        window.scrollTo(0, 0);
        loadMorePhotos()
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [allPhotos]);

    const loadMorePhotos = () => {
        setLoading(true);
        const photos: Photo[] = [];
        for (let i = 0; i < 15; i++) {
            photos.push(
                {
                    "id": 12345,
                    "width": 6000,
                    "height": 4000,
                    "url": "https://example.com/photo.jpg",
                    "alt": "A beautiful sunset over the mountains",
                    "avg_color": "#FF5733",
                    "photographer": "John Doe",
                    "photographer_url": "https://example.com/photographer/johndoe",
                    "photographer_id": 987,
                    "liked": true,
                    "src": {
                        "original": "https://example.com/photos/12345/original.jpg",
                        "large2x": "https://example.com/photos/12345/large2x.jpg",
                        "large": "https://example.com/photos/12345/large.jpg",
                        "medium": "https://example.com/photos/12345/medium.jpg",
                        "small": "https://example.com/photos/12345/small.jpg",
                        "portrait": "https://example.com/photos/12345/portrait.jpg",
                        "landscape": "https://example.com/photos/12345/landscape.jpg",
                        "tiny": "https://example.com/photos/12345/tiny.jpg"
                    }
                }
            )
        }

        setAllPhotos(photosAll => [...photosAll, ...photos]);
    }

    return (
        <>
            <InfiniteScrollWrapper fetching={loading} refetch={loadMorePhotos}>
                <Gallery photos={allPhotos}/>
            </InfiniteScrollWrapper>
        </>
    );
};

export default HomePage;