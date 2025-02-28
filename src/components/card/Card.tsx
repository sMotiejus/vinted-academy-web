import {Photo} from "../../models/photo.ts";

import './Card.css';

type CardProps = Photo;

const Card = ({photographer}: CardProps) => {
    return (
        <div className="card">
            Photographer: {photographer}
        </div>
    );
};

export default Card;