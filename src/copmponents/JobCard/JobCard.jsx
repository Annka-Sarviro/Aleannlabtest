import { NavLink, useLocation } from 'react-router-dom';
import getDays from '../../helpers/getDays';

function JobCard({ job }) {
  const location = useLocation();
  const days = getDays(job.createdAt);
  return (
    <li className="card mb-2 " key={job.id}>
      <NavLink to={`/${job.id}`} state={{ from: location }}>
        <img src={job.pictures[0]} alt="movie.title" width={85} height={85} />
        <h2>{job.title}</h2>
        <p>{job.name}</p>
        <p>Sity</p>
        <p>Posted {days} days ago</p>
      </NavLink>
    </li>
  );
}

export default JobCard;
