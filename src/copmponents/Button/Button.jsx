const Button = props => {
  return (
    <button className={`btn ${props.className}`} type="button">
      {' '}
      {props.children}
    </button>
  );
};

export default Button;
