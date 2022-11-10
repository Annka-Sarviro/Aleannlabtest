const AdditionalInfo = ({ job }) => {
  return (
    <div>
      <h2> Additional info</h2>
      <ul>
        Employment type
        {job.employment_type.map(type => {
          return <li key={type}>{type}</li>;
        })}
      </ul>
      <ul>
        Benefits
        {job.benefits.map(type => {
          return <li key={type}>{type}</li>;
        })}
      </ul>
    </div>
  );
};

export default AdditionalInfo;
