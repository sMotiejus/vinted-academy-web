import './Gallery.css';
import {Photo} from "../../models/photo.ts";
import Card from "../card/Card.tsx";
import {useEffect, useRef, useState} from "react";
import {throttle} from "../../utils/throttle.ts";

interface PhotoProps {
    photos: Photo[],
    unfavoritedHandler?: (id: number) => void,
}


const Gallery = ({photos, unfavoritedHandler}: PhotoProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [itemHeight, setItemHeight] = useState(300);

    useEffect(() => {
        const measureHeight = throttle(() => {
            if (containerRef.current) {
                const firstItem = containerRef.current.querySelector(".gallery-item");
                if (firstItem) setItemHeight(firstItem.getBoundingClientRect().height);
            }
        }, 50);

        measureHeight();
        window.addEventListener("resize", measureHeight);
        return () => window.removeEventListener("resize", measureHeight);
    }, []);

    useEffect(() => {
        console.log(itemHeight)
    }, [itemHeight]);

    if (photos.length === 0) {
        return <h1 className={'gallery-heading1'}>No photos fetched.</h1>;
    }

    return (
        <div ref={containerRef} className={'gallery-container'}>
            {photos.length > 0 &&
                photos.map((photo: Photo, index) =>
                    <Card key={photo.id + index} className="gallery-item" unfavorited={(id: number) => {
                        if (unfavoritedHandler) unfavoritedHandler(id)
                    }} {...photo} />)}
        </div>
    );
};

export default Gallery;