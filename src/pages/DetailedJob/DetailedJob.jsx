import { useParams } from 'react-router-dom';
import { getJobById } from '../../services/api';
import { useState, useEffect } from 'react';
import Button from '../../copmponents/Button/Button';
import Card from '../../copmponents/Card/Card';
import { Link } from 'react-router-dom';

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
    <div className="mx-[auto] px-6 py-4  desctop:px-8 desctop:py-6 bg-cardBodyColor font-proxi relative">
      <div className="	 tablet:w-[774px]">
        {' '}
        <h1 className="text-blue-80 text-3xl	font-bold	mb-[30px]">Job Details</h1>
        <Card job={job} />
        <Link to={'/'}>
          <Button className="bg-blue-30 text-blue-90 font-bold max-desctop:hidden">
            RETURN TO JOB BOARD
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default DetailedJob;
