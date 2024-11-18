import axios from "axios";
import { atom } from "jotai";

export const seaerchValueAtom = atom<string>("korea");
export const pageAtom = atom<number>(1);
export const totalPageAtom = atom<number>(0);

export const fetchApi = async (searchValue: string, page: number) => {
    const API_KEY = "pi1ltYJOU7t58Gi7ZrWf3XF7lSbbZixCsT-4v7ZNLqA";
    const BASE_URL = "https://api.unsplash.com/search/photos";
    try {
        const res = await axios(
            `${BASE_URL}/?query=${searchValue}&page=${page}&per_page=30&client_id=${API_KEY}`
        );
        return res;
    } catch (error) {
        console.error(error);
    }
};
