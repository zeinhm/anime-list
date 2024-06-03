import ReactPaginate from "react-paginate";

interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  pageCount,
  onPageChange,
}) => {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      forcePage={page}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={(e) => onPageChange(e)}
      renderOnZeroPageCount={null}
      containerClassName={"text-gray-200 flex gap-4 w-full justify-center mt-8"}
      pageClassName="min-w-[30px]"
      pageLinkClassName="bg-[#161616] rounded py-1 px-2 text-sm flex justify-center"
      activeLinkClassName={"!bg-[#282828] rounded "}
    />
  );
};

export default Pagination;
