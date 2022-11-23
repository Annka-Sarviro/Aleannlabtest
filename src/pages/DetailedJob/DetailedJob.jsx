import { useParams } from 'react-router-dom';
import { getJobById } from '../../services/api';
import { useState, useEffect } from 'react';
import Button from '../../copmponents/Button/Button';
import Card from '../../copmponents/Card/Card';

function DetailedJob() {
  const { jobId } = useParams();
  const [job, setJob] = useState();

  useEffect(() => {
    async function fetchJobDetails(jobId) {
      try {
        const data = await getJobById(jobId);

        setJob(data);
      } catch (error) {
        console.log({ error });
      }
    }
    fetchJobDetails(jobId);
  }, [jobId]);

  return (
    <div className="mx-[auto] px-6 py-4 bg-cardBodyColor font-proxi">
      <h1 className="text-blue-80 text-lg	font-bold	mb-[30px]	">Job Details</h1>
      <Card job={job} />
      <Button>RETURN TO JOB BOARD</Button>
    </div>
    // <div>
    //   <h1>Job Details</h1>
    //   <Button />
    //   <h2>{job.title}</h2>
    //   <p>Posted {getDays(job.createdAt)} ago</p>
    //   <p>{job.salary} Brutto, per year</p>
    //   {/* <p>{description}</p> */}
    //   <h3>Responsopilities</h3>
    // </div>
  );
}

export default DetailedJob;
