import {Photo} from "../../models/photo.ts";
import {useEffect, useRef, useState} from "react";
import Button from "../button/Button.tsx";
import {
    addToArrayInLocalStorage,
    getArrayFromLocalStorage,
    removeFromArrayInLocalStorage
} from "../../utils/localStorage.ts";
import {localStorageFavoritedPhotosKey} from "../../config.ts";

import './Card.css';
import NeededImage from "../neededImage/NeededImage.tsx";

interface CardProps extends Photo {
    className?: string;
    unfavorited?: (id: number) => void
    widthOfCard?: number
}

const Card = ({photographer, src, alt, id, className, unfavorited, widthOfCard, width, height}: CardProps) => {
    const timeoutRef = useRef<number | null>(null);
    const [hovered, setHovered] = useState(false);
    const [favorite, setFavorite] = useState<boolean>(false);

    useEffect(() => {
        const favoritedPhotosIds = getArrayFromLocalStorage(localStorageFavoritedPhotosKey);
        setFavorite(favoritedPhotosIds.includes(id))
    }, []);

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
        <div className={`card ${className}`} onMouseEnter={handleHover}>
            <NeededImage src={src}
                         widthOfCard={widthOfCard || 300}
                         alt={alt ?? "Picture has no alternative"}
                         width={width} height={height}/>
            {
                hovered &&
                <div className="card-overlay" onMouseLeave={handleHoverOut}>
                    <div className="information">
                        <div><b>Photographer</b></div>
                        <div className={"divider"}></div>
                        <div>{photographer}</div>
                    </div>
                    <Button title={favorite ? "Unfavorite" : "Favourite"}
                            onClickCallback={() => {
                                if (favorite) {
                                    setFavorite(false);
                                    removeFromArrayInLocalStorage(localStorageFavoritedPhotosKey, id);
                                    if (unfavorited) unfavorited(id)
                                } else {
                                    setFavorite(true);
                                    addToArrayInLocalStorage(localStorageFavoritedPhotosKey, id)
                                }
                            }}/>
                </div>
            }
        </div>
    );
};

export default Card;