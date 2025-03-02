export const getArrayFromLocalStorage = (key: string): number[] => {
    const storedData = localStorage.getItem(key);
    console.log("Stored", storedData);

    return storedData ? JSON.parse(storedData) : [];
};

export const addToArrayInLocalStorage = (key: string, id: number): void => {
    const arr = getArrayFromLocalStorage(key);
    console.log(arr);
    arr.push(id)
    localStorage.setItem(key, JSON.stringify(arr));
};

export const removeFromArrayInLocalStorage = (key: string, id: number): void => {
    const arr = getArrayFromLocalStorage(key);
    arr.filter(arrId => arrId !== id)
    localStorage.setItem(key, JSON.stringify(arr));
};
