import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { standardShowPage } from "@/constants";
import { pageAtom, totalPageAtom } from "@/stores";
import { useAtom } from "jotai";
import { useMemo } from "react";

function PaginationFooter() {
    const [page, setPage] = useAtom(pageAtom);
    const [totalPage] = useAtom(totalPageAtom);

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNext = () => {
        if (page < totalPage) {
            setPage(page + 1);
        }
    };

    const handlePageChange = (pageParam: number) => {
        if (pageParam >= 1 && pageParam <= totalPage) {
            setPage(pageParam);
        }
    };

    const pageNumbers = useMemo(
        () =>
            Array.from({ length: totalPage }, (_, i) => i + 1).filter(
                (pageNum) =>
                    pageNum >= page - standardShowPage &&
                    pageNum <= page + standardShowPage
            ),
        [page, totalPage]
    );

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={handlePrevious} />
                </PaginationItem>
                {page > standardShowPage && (
                    <>
                        <PaginationItem>
                            <PaginationLink onClick={() => handlePageChange(1)}>
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationEllipsis />
                    </>
                )}
                {pageNumbers.map((pageNum) => (
                    <PaginationItem key={pageNum}>
                        <PaginationLink
                            isActive={pageNum === page}
                            onClick={() => handlePageChange(pageNum)}
                        >
                            {pageNum}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {page < totalPage - standardShowPage && (
                    <>
                        <PaginationEllipsis />
                        <PaginationItem>
                            <PaginationLink
                                onClick={() => handlePageChange(totalPage)}
                            >
                                {totalPage}
                            </PaginationLink>
                        </PaginationItem>
                    </>
                )}

                <PaginationItem>
                    <PaginationNext onClick={handleNext} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}

export { PaginationFooter };
