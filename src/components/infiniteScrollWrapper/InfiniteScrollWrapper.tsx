import './InfiniteScrollWrapper.css';
import {ReactNode, useEffect} from "react";
import LoadingIndicator from "../loadingIndicator/LoadingIndicator.tsx";
import {debounce} from "../../utils/debounce.ts";

interface InfiniteScrollWrapperProps {
    children: ReactNode;
    fetching: boolean;
    refetch: () => void;
}

const InfiniteScrollWrapper = ({children, fetching, refetch}: InfiniteScrollWrapperProps) => {
    useEffect(() => {
        const handleScroll = debounce(() => {
            const scrolledAlmostToBottom =
                document.documentElement.scrollHeight - window.scrollY - window.innerHeight < window.innerHeight;

            if (scrolledAlmostToBottom && !fetching) {
                refetch();
            }
        }, 30);

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
