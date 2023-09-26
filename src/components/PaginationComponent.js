import React, {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import { getPages } from "../redux/actions/movieAction";

const PaginationComponent = () => {
  const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);
  useEffect(() => {
    setPageCount(pages);
  }, []);

  // Git Current Page => لما اضغط عرقم صفحة معينة يظهرلي الافلام الي فالصفحة
  const handlePageClick = (data) => {
    // data.selected + 1 => رقم الصفحة
    dispatch(getPages(data.selected + 1)); 
  }
  return (
    <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        containerClassName={"pagination justify-content-center p-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
  );
};

export default PaginationComponent;
