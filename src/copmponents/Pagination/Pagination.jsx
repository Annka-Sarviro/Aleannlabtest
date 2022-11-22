import React from 'react';
import ReactPaginate from 'react-paginate';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const Pagination = ({ onPageChange, pageCount }) => {
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          <ChevronRightIcon
            className="chevronIcon w-8 h-8 ml-8 fill-[#979797]"
            aria-hidden="true"
          />
        }
        onPageChange={onPageChange}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={
          <ChevronLeftIcon
            className="chevronIcon w-8 h-8 mr-8 fill-[#979797]"
            aria-hidden="true"
          />
        }
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link "
        previousClassName="page-item"
        previousLinkClassName="page-link "
        nextClassName="page-item"
        nextLinkClassName="page-link "
        breakClassName="page-item"
        breakLinkClassName="page-link "
        containerClassName="pagination  "
        activeClassName="active "
      />
    </>
  );
};

export default Pagination;
