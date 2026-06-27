import { useState } from "react";

const usePagination = (totalItems,pageSize) => {
    const [currentPage, setCurrentPage] = useState(0);
    const noOfPages = Math.ceil(totalItems / pageSize);

    const handlePageChange = (n) => {
        setCurrentPage(n);
    }

    const goToNextPage = () => {
        let nextPage = currentPage + 1;
        if (nextPage >= noOfPages) {
            setCurrentPage(0);
        } else {
            setCurrentPage(nextPage);
        }
    }

    const goToPreviousPage = () => {
        let prevPage = currentPage - 1;
        if (prevPage <= 0) {
            setCurrentPage(noOfPages - 1);
        } else {
            setCurrentPage(prevPage);
        }
    }
    return { currentPage, noOfPages, goToNextPage, goToPreviousPage, handlePageChange };
}

export default usePagination;