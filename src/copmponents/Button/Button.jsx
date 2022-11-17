const Button = props => {
  return (
    <button className="btn" type="button">
      {' '}
      {props.children}
    </button>
  );
};

export default Button;
