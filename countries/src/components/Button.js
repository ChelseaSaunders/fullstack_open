const Button = (props) => {
  return (
    <button onClick={props.handleButtonClick} name={props.name}>
      {props.text}
    </button>
  )
};

export default Button;