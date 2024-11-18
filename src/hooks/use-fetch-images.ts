import { fetchApi, pageAtom, seaerchValueAtom, totalPageAtom } from "@/stores";
import { useAtom, useSetAtom } from "jotai";
import { useCallback, useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function useFetchImages() {
    const [images, setImages] = useState([]);
    const [searchValue] = useAtom(seaerchValueAtom);
    const [page] = useAtom(pageAtom);
    const setTotalPage = useSetAtom(totalPageAtom);

    const fetchImages = useCallback(async () => {
        try {
            const res = await fetchApi(searchValue, page);

            if (res && res.status === 200 && res.data) {
                setImages(res.data.results);
                setTotalPage(res.data.total_pages);
                toast({
                    variant: "destructive",
                    title: "title...",
                    description: "contents...",
                });
            }
        } catch (error) {
            console.error(error);
        }
    }, [page, searchValue, toast]);

    useEffect(() => {
        fetchImages();
    }, [searchValue, page, fetchImages]);

    return { images };
}
