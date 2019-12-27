import React from 'react';
import ReactPaginate from "react-paginate";

const CustomPaginate = ({totalPages, setPage}) => {
  return (
    <ReactPaginate
      containerClassName="pagination justify-content-center"
      disabledClassName="disabled"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-link"
      nextClassName="page-link"
      activeClassName="active"
      breakClassName="page-link"
      breakLinkClassName="page-item"
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
