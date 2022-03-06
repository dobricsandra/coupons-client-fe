interface Item {
    key: string;
    value: string;
}

export const getLocalStorageItem = (key: string) => {
    return window.localStorage.getItem(key);
};

export const setLocalStorageItem = (item: Item) => {
    window.localStorage.setItem(item.key, item.value);
};
