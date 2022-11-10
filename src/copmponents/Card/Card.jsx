import Button from '../../copmponents/Button/Button';
import Geolocation from '../Geolocation/Geolocation';
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo';
import MainInfo from '../MainInfo/MainInfo';
import AttachedIamage from '../AttachedIamage/AttachedIamage';

const Card = ({ job }) => {
  if (!job) {
    return;
  }

  return (
    <div>
      <h1>Job Details</h1>
      <Button>Apply now</Button>
      <MainInfo job={job} />
      <Button>Apply now</Button>
      <Geolocation job={job} />
      <AdditionalInfo job={job} />
      <AttachedIamage job={job} />
      <Button>RETURN TO JOB BOARD</Button>
    </div>
  );
};

export default Card;
