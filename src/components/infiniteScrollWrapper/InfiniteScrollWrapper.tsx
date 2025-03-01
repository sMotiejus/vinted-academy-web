import './InfiniteScrollWrapper.css';
import {ReactNode, useEffect} from "react";
import LoadingIndicator from "../loadingIndicator/LoadingIndicator.tsx";
import {throttle} from "../../utils/throttle.ts";

interface InfiniteScrollWrapperProps {
    children: ReactNode;
    fetching: boolean;
    refetch: () => void;
}

const InfiniteScrollWrapper = ({children, fetching, refetch}: InfiniteScrollWrapperProps) => {
    useEffect(() => {
        const handleScroll = throttle(() => {
            if (document.documentElement.scrollHeight - window.scrollY - window.innerHeight <
                window.innerHeight && !fetching) {
                refetch();
            }
        }, 200);

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div>
            {children}
            {fetching && <LoadingIndicator/>}
        </div>
    );
};

export default InfiniteScrollWrapper;