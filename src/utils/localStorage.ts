export const getArrayFromLocalStorage = (key: string): number[] => {
    const storedData = localStorage.getItem(key);

    return storedData ? JSON.parse(storedData) : [];
};

export const addToArrayInLocalStorage = (key: string, id: number): void => {
    const arr = getArrayFromLocalStorage(key);

    if (arr.includes(id)) {
        return;
    }

    arr.push(id)
    localStorage.setItem(key, JSON.stringify(arr));
};

export const removeFromArrayInLocalStorage = (key: string, id: number): void => {
    const arr = getArrayFromLocalStorage(key);
    const tempArr = arr.filter(arrId => arrId !== id);
    localStorage.setItem(key, JSON.stringify(tempArr));
};
