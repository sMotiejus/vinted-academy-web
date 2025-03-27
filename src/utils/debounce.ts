export function debounce<T extends () => void>(mainFunction: T, delay: number) {
    let timer: number | undefined;

    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => mainFunction(), delay);
    };
}
