import './Gallery.css';
import {Photo} from "../../models/photo.ts";
import Card from "../card/Card.tsx";

interface PhotoProps {
    photos: Photo[];
}

const Gallery = ({photos}: PhotoProps) => {
    if (photos.length === 0) {
        return <h1>No photos fetched.</h1>;
    }

    return (
        <div className={'gallery'}>
            {photos.length > 0 && photos.map((photo: Photo) => <Card key={photo.id} {...photo} />)}
        </div>
    );
};

export default Gallery;