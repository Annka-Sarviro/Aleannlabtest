const Geolocation = ({ job }) => {
  console.log(job.location.lat);
  return (
    <div>
      <p>{job.name}</p>
      <p>{job.address}</p>
      <p>{job.phone}</p>
      <p>{job.email}</p>
      <div>
        <img
          src={`https://static.maps.2gis.com/1.0?s=404x222&pt=${job.location.lat},${job.location.long}&z=2`}
          alt="job.name"
        />
      </div>
    </div>
  );
};

export default Geolocation;