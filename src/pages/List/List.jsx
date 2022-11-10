import JobCard from '../../copmponents/JobCard/JobCard';

function List({ jobs }) {
  console.log(jobs);
  if (!jobs) {
    return;
  }
  return (
    <ul>
      {jobs.map(job => {
        return <JobCard job={job} key={job.id} />;
      })}
    </ul>
  );
}

export default List;
