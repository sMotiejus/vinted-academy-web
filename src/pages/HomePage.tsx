import {useEffect, useState} from "react";

import {Photo} from "../models/photo.ts";
import Gallery from "../components/gallery/Gallery.tsx";

const HomePage = () => {

    const [allPhotos, setAllPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        const photos: Photo[] = [];
        for (let i = 0; i < 20; i++) {
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

        setAllPhotos(photos);
    }, []);

    return (
        <div>
            <Gallery photos={allPhotos}/>
        </div>
    );
};

export default HomePage;