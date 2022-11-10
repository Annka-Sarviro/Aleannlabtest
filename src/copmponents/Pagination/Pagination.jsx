import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import List from '../../pages/List/List';

const Pagination = ({ jobs }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(jobs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(jobs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, jobs]);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % jobs.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <List jobs={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-num"
        previousLinkClassName="page-num"
        nextClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};

// ReactDOM.render(
//   <PaginatedItems itemsPerPage={4} />,
//   document.getElementById('container')
// );

export default Pagination;
