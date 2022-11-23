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
    <div className="">
      <h2 className="text-blue-80 text-2xl font-bold mb-[26px]">{job.title}</h2>
      <div className="flex justify-between items-center mb-4">
        <p className="text-xs text-blue-30 ">
          Posted {getDays(job.createdAt)} ago
        </p>
        <p className="flex flex-col desctop:flex-col-reverse">
          <span className="text-blue-80 text-2xl font-bold">{sal}</span>
          <span className="text-xs text-blue-30"> Brutto, per year</span>
        </p>
      </div>
      <p className="text-lg text-blue-50 mb-[43px]">{description}</p>
      <h3 className="text-xl text-blue-80 font-bold">Responsopilities</h3>
      <p className="text-lg text-blue-50 mb-[43px]">{responsopilities}</p>
      <h3 className="text-xl text-blue-80 font-bold">
        Compensation & Benefits:
      </h3>
      <Benefits benefitsArray={benefitsArray}>
        {' '}
        Our physicians enjoy a wide range of benefits, including:
      </Benefits>
    </div>
  );
};

export default MainInfo;
