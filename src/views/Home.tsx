import { Banner, CommonHeader, Nav, PaginationFooter } from "@/components";
import { Box } from "@/components/common/box";
import useFetchImages from "@/hooks/use-fetch-images";
import { ImageCardType } from "@/types/image-type";

export default function HomePage() {
    const { images } = useFetchImages();

    return (
        <section className="page">
            <div className="page__container">
                <CommonHeader />
                <Nav />
                <Banner />
                <div className="page__container__contents">
                    {images.length ? (
                        images.map((image: ImageCardType) => {
                            return <Box key={image.id} data={image} />;
                        })
                    ) : (
                        <div>No data ....</div>
                    )}
                </div>
            </div>
            <footer>
                <PaginationFooter />
            </footer>
        </section>
    );
}
