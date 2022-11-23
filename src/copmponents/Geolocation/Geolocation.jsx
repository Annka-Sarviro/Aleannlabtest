import { MapPinIcon } from '@heroicons/react/24/solid';

const Geolocation = ({ job }) => {
  return (
    <div className="bg-blue-90 rounded-rad8 tablet:absolute tablet:top-8 tablet:right-8 tablet:w-[400px]">
      <div className="px-[62px] py-[30px]">
        <p className=" text-lg text-white mb-[17px]">{job.name}</p>
        <p className=" text-lg text-white mb-[4px]">
          <MapPinIcon className="w-5 h-6 mr-1 text-blue-30 inline-block" />
          <span> {job.address}</span>
        </p>
        <p className=" text-lg text-white/50 mb-[4px]">{job.phone}</p>
        <p className=" text-lg text-white/50 mb-[4px]">{job.email}</p>
      </div>
      <div>
        <img
          className="w-[100%]"
          src={`https://static.maps.2gis.com/1.0?s=404x222&pt=${job.location.lat},${job.location.long}&z=2`}
          alt="job.name"
        />
      </div>
    </div>
  );
};

export default Geolocation;
