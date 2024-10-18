/* eslint-disable react/prop-types */


const RiderProductPagination = ({ paginate, itemsPerPage, totalItems, currentPage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const pageNumber = [];

    for (let i = 1; i <= totalPages; i++) {  // Changed from < to <=
        pageNumber.push(i);
    }

    const handlePrevPage = () => {
        if (currentPage > 1) {
            paginate(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            paginate(currentPage + 1);
        }
    };

    const getDisplayedPageNumbers = () => {
        if (totalPages <= 3) {
            return pageNumber;
        }

        if (currentPage <= 3) {
            return [...pageNumber.slice(0, 3), "...", totalPages];
        }

        if (currentPage > 3 && currentPage < totalPages - 1) {
            return [1, "...", currentPage, "...", totalPages];
        }

        if (currentPage >= totalPages - 1) {
            return [1, "...", ...pageNumber.slice(totalPages - 3)];
        }

        return pageNumber;
    };

    const displayPageNumber = getDisplayedPageNumbers();

    return (
        <section className="flex flex-col">
            <div className="flex items-center justify-center w-full gap-[24px]">
                <div onClick={handlePrevPage} className="cursor-pointer flex items-center justify-center border-[1px] border-[#BDBDBD] w-[97px] h-[32px] rounded-[8px] gap-[8px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] text-[#BDBDBD] text-[12px] leading-[14px] font-[400]">
                    <i className="ri-arrow-left-fill"></i> Previous
                </div>

                <ul className="flex items-center">
                    {displayPageNumber.map((number, index) => (
                        <li
                            key={index}
                            className={`flex items-center justify-center w-[32px] h-[32px] rounded-[50%] mx-1 
                                ${currentPage === number ? "text-white bg-[#FF9B39]" : "text-[#5075FF] bg-transparent"}`}
                        >
                            {number ? (
                                <a
                                    onClick={() => paginate(number)}
                                    className="w-full h-full flex items-center justify-center text-[14px] leading-[17px] font-[400] cursor-pointer font-tekInter "
                                >
                                    {number}
                                </a>
                            ) : (
                                <span className="text-[16px] leading-[25px] font-[600] cursor-default ">
                                    {number}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>

                <div onClick={handleNextPage} className="cursor-pointer flex items-center justify-center border-[1px] border-[#BDBDBD] w-[97px] h-[32px] rounded-[8px] gap-[8px] pt-[8px] pr-[12px] pb-[8px] pl-[12px] text-[#5075FF] text-[12px] leading-[14px] font-[400]">
                    Next 
                    <i className="ri-arrow-right-fill"></i>
                </div>
            </div>
        </section>
    )
}

export default RiderProductPagination;
