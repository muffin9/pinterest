import { CommonHeader, Nav } from "@/components";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui";
import { LOCAL_STORAGE_KEYS } from "@/constants";
import { useBookmark } from "@/hooks/use-bookmark";
import { ImageCardType } from "@/types/image-type";
import { Bookmark, Trash } from "lucide-react";
import { useMemo } from "react";

export default function BookmarkPage() {
    const { bookmarks, toggleBookmarks, removeBookmark } = useBookmark();

    const images = useMemo(() => {
        const storedImages = localStorage.getItem(LOCAL_STORAGE_KEYS.BOOKMARK);
        if (storedImages) return JSON.parse(storedImages);
        else return [];
    }, [bookmarks]);

    return (
        <section>
            <CommonHeader />
            <Nav />
            <div className="flex flex-col gap-4 p-4">
                {images.length ? (
                    images.map((image: ImageCardType) => {
                        return (
                            <Card key={image.id}>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-4">
                                        <span>{image.alt_description}</span>
                                        <Trash
                                            onClick={() =>
                                                removeBookmark(image.id)
                                            }
                                            className="cursor-pointer"
                                        />
                                        <Bookmark
                                            color="skyblue"
                                            className="cursor-pointer"
                                            onClick={() =>
                                                toggleBookmarks(image)
                                            }
                                        />
                                    </CardTitle>
                                    <CardDescription>
                                        {image.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent></CardContent>
                            </Card>
                        );
                    })
                ) : (
                    <div>조회 가능한 데이터가 없습니다.</div>
                )}
            </div>
        </section>
    );
}
