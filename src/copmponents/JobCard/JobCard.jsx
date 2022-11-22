import { NavLink, useLocation } from 'react-router-dom';
import getDays from '../../helpers/getDays';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';

function JobCard({ job }) {
  const location = useLocation();
  const days = getDays(job.createdAt);
  return (
    <li
      className="card mb-2  font-proxi tablet:bg-cardBodyColor cursor-pointer "
      key={job.id}
    >
      <NavLink
        className="flex justify-between"
        to={`/${job.id}`}
        state={{ from: location }}
      >
        <img
          className="mr-3 desctop:mr-6 rounded-[50%] mobile:h-16 w-16 tablet:h-20 tablet:w-20 desctop:h-24 desctop:w-24 "
          src={job.pictures[0]}
          alt="movie.title"
          width={85}
          height={85}
        />
        <div className="w-[278px] tablet:w-[600px] desctop:w-[1240px] flex flex-col relative">
          <div className="absolute max-desctop:top-[-25px] max-desctop:left-0 flex desctop:right-[220px] desctop:top-[40px]">
            <StarIcon className=" fill-blue-50  h-4 w-4" />
            <StarIcon className=" fill-blue-50  h-4 w-4" />
            <StarIcon className=" fill-blue-50  h-4 w-4" />
            <StarIcon className=" fill-blue-50  h-4 w-4" />
            <StarIcon className=" fill-blue-50  h-4 w-4" />
          </div>

          <h2 className="text-blue-80 text-lg desctop:text-xl font-lg desctop:font-bold mb-2 tracking-tighter">
            {job.title}
          </h2>
          <p className="text-blue-30 text-base desctop:lg-xl font-base mb-2 font-normaltracking-widest">
            {job.name}
          </p>
          <div className="flex flex-raw ">
            <MapPinIcon className="w-5 h-6 mr-1 text-blue-30" />
            <p className="text-blue-30 text-base desctop:lg font-base mb-2  font-normaltracking-widest">
              Sity
            </p>
          </div>

          <BookmarkIcon className=" w-6 h-8 stroke-blue-80 stroke-2 absolute right-0 top-0 invisible desctop:visible" />
          <p className="absolute max-desctop:top-[-25px] right-0 desctop:bottom-0 text-blue-30 text-sm desctop:text-base font-light mb-2 ">
            Posted {days} days ago
          </p>
        </div>
      </NavLink>
    </li>
  );
}

export default JobCard;
