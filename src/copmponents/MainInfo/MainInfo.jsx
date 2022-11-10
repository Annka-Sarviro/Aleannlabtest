import getDays from '../../helpers/getDays';
import Benefits from '../../copmponents/Benefits/Benefits';
import splitedDescription from '../../helpers/splitedDescription';

const MainInfo = ({ job }) => {
  const { description, responsopilities, benefitsArray } = splitedDescription(
    job.description
  );

  const re = /k/gi;
  const sal = job.salary.replace(re, '000');

  return (
    <div>
      <h2>{job.title}</h2>
      <p>Posted {getDays(job.createdAt)} ago</p>
      <p>{sal} Brutto, per year</p>
      <p>{description}</p>
      <h3>Responsopilities</h3>
      <p>{responsopilities}</p>
      <h3>Compensation & Benefits:</h3>
      <Benefits benefitsArray={benefitsArray}>
        {' '}
        Our physicians enjoy a wide range of benefits, including:
      </Benefits>
    </div>
  );
};

export default MainInfo;
