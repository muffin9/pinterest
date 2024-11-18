import { LOCAL_STORAGE_KEYS } from "@/constants";
import { ImageCardType } from "@/types/image-type";
import {
    getBookmarksFromLocalStorage,
    saveBookmarksToLocalStorage,
} from "@/utils";
import { useState } from "react";

export function useBookmark() {
    const initialBookmarks = getBookmarksFromLocalStorage(
        LOCAL_STORAGE_KEYS.BOOKMARK
    ).reduce((acc: { [x: string]: boolean }, bookmark: ImageCardType) => {
        acc[bookmark.id] = true;
        return acc;
    }, {} as { [key: string]: boolean });

    const [bookmarks, setBookmarks] = useState<{ [key: string]: boolean }>(
        initialBookmarks
    );

    const toggleBookmarks = (data: ImageCardType) => {
        const localbookMarkData = getBookmarksFromLocalStorage(
            LOCAL_STORAGE_KEYS.BOOKMARK
        );

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

        saveBookmarksToLocalStorage(
            LOCAL_STORAGE_KEYS.BOOKMARK,
            updatedBookmarks
        );

        setBookmarks((prevBookmarks) => ({
            ...prevBookmarks,
            [data.id]: !prevBookmarks[data.id], // 상태 토글
        }));
    };

    const removeBookmark = (imageId: string) => {
        const localbookMarkData = getBookmarksFromLocalStorage(
            LOCAL_STORAGE_KEYS.BOOKMARK
        );

        const updatedBookmarks = localbookMarkData.filter(
            (bookmark: ImageCardType) => bookmark.id !== imageId
        );

        saveBookmarksToLocalStorage(
            LOCAL_STORAGE_KEYS.BOOKMARK,
            updatedBookmarks
        );

        setBookmarks((prevBookmarks) => {
            const newBookmarks = { ...prevBookmarks };
            delete newBookmarks[imageId];
            return newBookmarks;
        });
    };

    return { bookmarks, toggleBookmarks, removeBookmark };
}
