const Benefits = ({ benefitsArray }) => {
  return (
    <ul>
      {benefitsArray.map(benefit => {
        return <li key={benefit}>{benefit}</li>;
      })}
    </ul>
  );
};

export default Benefits;
