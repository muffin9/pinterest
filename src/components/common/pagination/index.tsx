import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { pageAtom, totalPageAtom } from "@/stores";
import { useAtom } from "jotai";
import { useState } from "react";

function PaginationFooter() {
    const [page, setPage] = useAtom(pageAtom);
    const [totalPage] = useAtom(totalPageAtom);
    const [currentPage, setCurrentPage] = useState(page);

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
            setPage(currentPage + 1);
        }
    };

    const handlePageChange = (pageParam: number) => {
        if (pageParam >= 1 && pageParam <= totalPage) {
            setCurrentPage(pageParam);
            setPage(pageParam);
        }
    };

    const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={handlePrevious} />
                </PaginationItem>
                {currentPage > 5 && (
                    <>
                        <PaginationItem>
                            <PaginationLink onClick={() => handlePageChange(1)}>
                                1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationEllipsis />
                    </>
                )}
                {pageNumbers
                    .filter(
                        (page) =>
                            page >= currentPage - 4 && page <= currentPage + 4
                    )
                    .map((page) => (
                        <PaginationItem key={page}>
                            <PaginationLink
                                isActive={page === currentPage}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                {currentPage < totalPage - 5 && (
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
