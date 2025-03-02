import {Photo} from "../../models/photo.ts";
import {useRef, useState} from "react";
import Button from "../button/Button.tsx";
import {addToArrayInLocalStorage} from "../../utils/localStorage.ts";
import {localStorageFavoritedPhotosKey} from "../../config.ts";

import './Card.css';

const Card = ({photographer, src, alt, id}: Photo) => {
    const timeoutRef = useRef<number | null>(null);
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setHovered(true)
    }

    const handleHoverOut = () => {
        timeoutRef.current = setTimeout(() => {
            setHovered(false)
        }, 400);
    }

    return (
        <div className="card" onMouseEnter={handleHover}>
            <img src={src.original} alt={alt ?? "Picture has no alternative"} loading="lazy"/>
            {
                hovered &&
                <div className="card-overlay" onMouseLeave={handleHoverOut}>
                    <div className="information">
                        <div><b>Title</b></div>
                        <div className={"divider"}></div>
                        <div>{photographer}</div>
                    </div>
                    <Button title={"Favourite"} onClickCallback={() => {
                        addToArrayInLocalStorage(localStorageFavoritedPhotosKey, id)
                    }}/>
                </div>
            }
        </div>
    );
};

export default Card;