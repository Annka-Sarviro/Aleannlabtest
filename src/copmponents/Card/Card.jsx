import Button from '../../copmponents/Button/Button';
import Geolocation from '../Geolocation/Geolocation';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import MainInfo from '../MainInfo/MainInfo';
import AttachedIamage from '../AttachedIamage/AttachedIamage';
import { BookmarkIcon, StarIcon, ShareIcon } from '@heroicons/react/24/outline';

const Card = ({ job }) => {
  if (!job) {
    return;
  }

  return (
    <div>
      <div className="mb-[135px]">
        <Button className="max-desctop:hidden">Apply now</Button>
        <div className="flex mb-[32px]">
          <p className="flex mr-4">
            <StarIcon className="stroke-blue-80 w-5 h-5 inline stroke-2 mr-3 desctop:hidden desctop:w-6 desctop:h-6" />
            <BookmarkIcon className="stroke-blue-80 w-5 h-5 hidden mr-4 stroke-2 desctop:inline desctop:w-6 desctop:h-6" />
            <span className="flex text-blur-80 text-base ">
              Save to my list
            </span>
          </p>

          <p className="flex ">
            <ShareIcon className="stroke-blue-80 w-5 h-5 inline stroke-2 mr-3 desctop:w-6 desctop:h-6" />
            <span className="flex text-blur-80 text-base ">Share</span>
          </p>
        </div>
        <MainInfo job={job} />
        <Button className="mb-40px mx-auto block">Apply now</Button>
      </div>
      <div className="flex flex-col-reverse desctop:flex-col">
        <Geolocation job={job} />
        <AdditionalInfo job={job} />
        <AttachedIamage job={job} />
      </div>
    </div>
  );
};

export default Card;
