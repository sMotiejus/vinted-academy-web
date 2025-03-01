export function throttle<T extends (...args: never[]) => void>(mainFunction: T, delay: number) {
    let timerFlag: number | null = null;

    return (...args: Parameters<T>) => {
        if (timerFlag === null) {
            mainFunction(...args);
            timerFlag = setTimeout(() => {
                timerFlag = null;
            }, delay);
        }
    };
}
