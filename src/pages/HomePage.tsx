import {useEffect, useRef, useState} from "react";

import {Photo} from "../models/photo.ts";
import Gallery from "../components/gallery/Gallery.tsx";
import InfiniteScrollWrapper from "../components/infiniteScrollWrapper/InfiniteScrollWrapper.tsx";
import {fetchPhotos} from "../services/api.ts";

const HomePage = () => {
    const pageRef = useRef(1);
    const [allPhotos, setAllPhotos] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(false);

    const effectRan = useRef(false);

    useEffect(() => {
        if (!effectRan.current) {
            // Scroll to top ( if you scrolled down and refreshed page)
            window.scrollTo(0, 0);
            loadMorePhotos();
            effectRan.current = true;
        }
    }, []);

    const loadMorePhotos = () => {
        if (!loading) {
            setLoading(true);
            fetchPhotos({
                page: pageRef.current,
                per_page: 18
            })
                .then(data => {
                    setAllPhotos(ar => [...ar, ...data.photos]);
                })
                .finally(() => {
                    pageRef.current = pageRef.current + 1;
                    setLoading(false);
                });
        }
    };


    return (
        <InfiniteScrollWrapper fetching={loading} refetch={loadMorePhotos}>
            <Gallery photos={allPhotos}/>
        </InfiniteScrollWrapper>
    );
};

export default HomePage;