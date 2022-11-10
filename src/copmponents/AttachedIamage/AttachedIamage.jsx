const AttachedIamage = ({ job }) => {
  return (
    <div>
      <h2>Attached images</h2>
      <ul>
        {job.pictures.map((link, index) => {
          return (
            <li key={index}>
              <img src={link} alt={job.name} width={209} height={115} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AttachedIamage;
