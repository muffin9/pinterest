import { flexColumnSpaceBetween } from "@/styles/flex";
import { SearchBar } from "./ui/search-bar";

function Banner() {
    return (
        <div
            className={`h-[350px] bg-[url('src/assets/wallpaper.png')] bg-cover bg-center`}
        >
            <div
                className={`w-[50%] ${flexColumnSpaceBetween} m-auto gap-4 py-16`}
            >
                <h1 className="text-white font-bold">
                    프로젝트 01: 오픈 API를 활용한 이미지 검색 사이트 만들기
                </h1>
                <h2 className="text-white font-semibold">
                    인터넷 시각자료 출처입니다.
                    <br /> 모든 지역에 있는 크리에이터들의 지원을 받습니다.
                </h2>
                <SearchBar placeholder="원하는 이미지를 검색하세요." />
            </div>
        </div>
    );
}

export { Banner };
