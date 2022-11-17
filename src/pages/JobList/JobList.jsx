import List from '../List/List';
import Pagination from '../../copmponents/Pagination/Pagination';
import { useState, useEffect } from 'react';
import { getJobList } from '../../services/api';

function JobList() {
  const [jobs, setJobs] = useState([]);
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

  return (
    <div className="">
      <h1 className="text-color-bodyColor ">All jobs</h1>
      <List jobs={jobs} />
      <Pagination jobs={jobs} />
    </div>
  );
}

export default JobList;
