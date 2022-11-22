import List from '../../copmponents/List/List';
import Pagination from '../../copmponents/Pagination/Pagination';
import { useState, useEffect } from 'react';
import { getJobList } from '../../services/api';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15;

  useEffect(() => {
    async function fetchJobList() {
      try {
        const data = await getJobList();

        setJobs(data);
      } catch (error) {
        console.log({ error });
      }
    }

    fetchJobList();
  }, []);

  useEffect(() => {
    if (!jobs) {
      return;
    }
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(jobs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(jobs.length / itemsPerPage));
  }, [jobs, itemOffset]);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % jobs.length;
    setItemOffset(newOffset);
  };

  return (
    <div id="conatainer" className="mx-[auto] p-5">
      <h1 className="hidden ">All jobs</h1>
      <List jobs={currentItems} />
      <Pagination onPageChange={handlePageClick} pageCount={pageCount} />
    </div>
  );
}

export default JobList;
