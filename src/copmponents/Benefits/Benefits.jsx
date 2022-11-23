import { StopIcon } from '@heroicons/react/24/outline';

const Benefits = ({ benefitsArray }) => {
  return (
    <ul className="mb-[26px]">
      {benefitsArray.map(benefit => {
        return (
          <li className="text-lg text-blue-50 " key={benefit}>
            <span>
              {' '}
              <StopIcon
                className="fill-blue-80
              w-5
              h-5
              inline
              stroke-2
              mr-3
              desctop:hidden
              desctop:w-2
              desctop:h-2"
              />
            </span>
            {benefit}
          </li>
        );
      })}
    </ul>
  );
};

export default Benefits;
