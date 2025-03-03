import {ImageSize, NeededPhotoSources} from "../../models/photo.ts";
import {extractParameterFromUrl} from "../../utils/stringUtils.ts";
import {calculateCardsHeight, calculateCardsWidth} from "../../utils/general.ts";

interface NeededImageProps {
    src: NeededPhotoSources;
    widthOfCard: number;
}

const getImageSizes = (src: NeededPhotoSources) => {
    const sizes: ImageSize[] = []
    Object.values(src).forEach((url) => {
        const imageSize: ImageSize = {src: url, width: 0, height: 0}
        imageSize.width = extractParameterFromUrl(url, "w") ?? 0;
        imageSize.height = extractParameterFromUrl(url, "h") ?? 0;

        if (imageSize.width === 0 && imageSize.height > 0) imageSize.height = calculateCardsWidth(imageSize.height);
        if (imageSize.height === 0 && imageSize.width > 0) imageSize.width = calculateCardsHeight(imageSize.width);

        sizes.push(imageSize);
    })

    return sizes;
}

const NeededImage = ({src, widthOfCard}: NeededImageProps) => {
    const heightOfCard = calculateCardsHeight(widthOfCard);
    const imagesWithSizes = getImageSizes(src);


    return (
        <img/>
    );
};

export default NeededImage;