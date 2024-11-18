import { LOCAL_STORAGE_KEYS } from "@/constants";
import { ImageCardType } from "@/types/image-type";
import { useState } from "react";

export function useBookmark() {
    const initLocalBookMarkData = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEYS.BOOKMARK) ?? "[]"
    );

    const initialBookmarks = initLocalBookMarkData.reduce(
        (acc: { [x: string]: boolean }, bookmark: ImageCardType) => {
            acc[bookmark.id] = true;
            return acc;
        },
        {} as { [key: string]: boolean }
    );

    const [bookmarks, setBookmarks] = useState<{ [key: string]: boolean }>(
        initialBookmarks
    );

    const getBookmarksFromLocalStorage = () => {
        const localbookMarkData = localStorage.getItem(
            LOCAL_STORAGE_KEYS.BOOKMARK
        );
        return JSON.parse(localbookMarkData ?? "[]");
    };

    const saveBookmarksToLocalStorage = (updatedBookmarks: ImageCardType[]) => {
        localStorage.setItem(
            LOCAL_STORAGE_KEYS.BOOKMARK,
            JSON.stringify(updatedBookmarks)
        );
    };

    const toggleBookmarks = (data: ImageCardType) => {
        const localbookMarkData = getBookmarksFromLocalStorage();

        const findBookmark = localbookMarkData.find(
            (item: ImageCardType) => item.id === data.id
        );

        let updatedBookmarks;

        if (findBookmark) {
            updatedBookmarks = localbookMarkData.filter(
                (bookmark: ImageCardType) => bookmark.id !== data.id
            );
        } else {
            updatedBookmarks = [...localbookMarkData, { ...data }];
        }

        saveBookmarksToLocalStorage(updatedBookmarks);

        setBookmarks((prevBookmarks) => ({
            ...prevBookmarks,
            [data.id]: !prevBookmarks[data.id], // 상태 토글
        }));
    };

    const removeBookmark = (imageId: string) => {
        const localbookMarkData = getBookmarksFromLocalStorage();

        const updatedBookmarks = localbookMarkData.filter(
            (bookmark: ImageCardType) => bookmark.id !== imageId
        );

        saveBookmarksToLocalStorage(updatedBookmarks);

        setBookmarks((prevBookmarks) => {
            const newBookmarks = { ...prevBookmarks };
            delete newBookmarks[imageId];
            return newBookmarks;
        });
    };

    return { bookmarks, toggleBookmarks, removeBookmark };
}
