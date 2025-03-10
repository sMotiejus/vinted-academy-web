import {ImageSize, NeededPhotoSources} from "../../models/photo.ts";
import {extractParameterFromUrl} from "../../utils/stringUtils.ts";
import {calculateCardsHeight} from "../../utils/general.ts";

interface NeededImageProps {
    src: NeededPhotoSources;
    widthOfCard: number;
    width: number;
    height: number;
    alt: string | null;
}

const getImageSizes = (src: NeededPhotoSources) => {
    const sizes: ImageSize[] = []
    Object.values(src).forEach((url) => {
        const imageSize: ImageSize = {src: url, width: 0, height: 0}
        imageSize.width = extractParameterFromUrl(url, "w") ?? 0;
        imageSize.height = extractParameterFromUrl(url, "h") ?? 0;

        if (imageSize.width === 0 && imageSize.height > 0) imageSize.width = imageSize.height * 3 / 4;
        if (imageSize.height === 0 && imageSize.width > 0) imageSize.height = imageSize.width * 3 / 4;

        if (imageSize.width === 0 && imageSize.height === 0) {
            imageSize.width = 4000;
            imageSize.height = 1500;
        }

        sizes.push(imageSize);
    })

    return sizes;
}

const getMinimumNeededPhotoSources = (src: ImageSize[], width: number, height: number) => {
    const filteredImages = src.filter(image => image.width >= width && image.height >= height);

    if (filteredImages.length > 0) {
        const sortedImages = filteredImages.sort((a, b) => (a.width + a.height) - (b.width + b.height));
        return sortedImages[0];
    }

    return filteredImages[filteredImages.length - 1];
}

const NeededImage = ({src, widthOfCard}: NeededImageProps) => {
    const heightOfCard = calculateCardsHeight(widthOfCard);
    const imagesWithSizes = getImageSizes(src);

    return (
        <img src={getMinimumNeededPhotoSources(imagesWithSizes, widthOfCard, heightOfCard).src}
             alt={"None"}
             loading={"lazy"}/>
    );
};

export default NeededImage;