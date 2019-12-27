import React from 'react';
import ReactPaginate from "react-paginate";

const CustomPaginate = ({totalPages, setPage}) => {
  return (
    <ReactPaginate
      containerClassName="pagination justify-content-center"
      disabledClassName="disabled"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      previousLinkClassName="page-link"
      activeClassName="active"
      activeLinkClassName="active"
      breakClassName="break-me"
      breakLinkClassName="page-link"
      pageCount={totalPages}
      pageRangeDisplayed={10}
      onPageChange={({selected}) => {
        setPage(selected + 1)
      }}
    >
    </ReactPaginate>
  );
};

export default CustomPaginate;
