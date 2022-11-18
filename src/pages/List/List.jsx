import JobCard from '../../copmponents/JobCard/JobCard';

function List({ jobs }) {
  console.log(jobs);
  if (!jobs) {
    return;
  }
  return (
    <ul className="mx-[auto] max-w-[1400px]">
      {jobs.map(job => {
        return <JobCard job={job} key={job.id} />;
      })}
    </ul>
  );
}

export default List;
