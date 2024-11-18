export const getBookmarksFromLocalStorage = (key: string) => {
    const localbookMarkData = localStorage.getItem(key);
    return JSON.parse(localbookMarkData ?? "[]");
};

export const saveBookmarksToLocalStorage = <T,>(key: string, data: T[]) => {
    localStorage.setItem(key, JSON.stringify(data));
};
