const AdditionalInfo = ({ job }) => {
  return (
    <div className="mb-[26px]">
      <h2 className="text-blue-80 text-lg	font-bold	mb-[30px]	">
        {' '}
        Additional info
      </h2>
      <p className="text-lg text-blue-30 mb-[10px]">Employment type</p>
      <ul className="mb-2 flex">
        {job.employment_type.map(type => {
          return (
            <li
              className=" [&:not(:last-child)]:mr-2  bg-lightblue-50 h-[50px] w-[122px] flex justify-center items-center rounded-rad8 border-[1px] border-lightblue-80"
              key={type}
            >
              <p className="text-base text-lightblue-100 font-bold">{type}</p>
            </li>
          );
        })}
      </ul>
      <p className="text-lg text-blue-30 mb-[10px]"> Benefits</p>
      <ul className="flex">
        {job.benefits.map(type => {
          return (
            <li
              className=" [&:not(:last-child)]:mr-2  bg-yellow-50 h-[50px] w-[122px] flex justify-center items-center rounded-rad8 border-[1px] border-yellow-30"
              key={type}
            >
              <p className="text-base text-yellow-100 font-bold">{type}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdditionalInfo;
