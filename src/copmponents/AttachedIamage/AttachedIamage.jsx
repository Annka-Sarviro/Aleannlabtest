const AttachedIamage = ({ job }) => {
  return (
    <div className="mb-[26px]">
      <h2 className="text-blue-80 text-lg	font-bold	mb-[30px]	">
        Attached images
      </h2>
      <ul className="grid  grid-cols-2 gap-2 gap-x-1 min-[768px]:grid-cols-3">
        {job.pictures.map((link, index) => {
          return (
            <li key={index}>
              <img
                className="h-28 w-52 desctop:w-56  desctop:h-30 my-4 rounded-lg object-cover max-[767px]:[&:nth-child(3)]:hidden"
                src={link}
                alt={job.name}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AttachedIamage;
