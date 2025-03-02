export function throttle<T extends () => void>(mainFunction: T, delay: number) {
    let timerFlag: number | undefined;

    return () => {
        if (!timerFlag) {
            mainFunction();
            timerFlag = setTimeout(() => (timerFlag = undefined), delay);
        }
    };
}
