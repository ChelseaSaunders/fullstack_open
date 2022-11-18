const Button = ({ handleClick }) => {
  console.log(typeof handleClick);
  return (
    <button onClick={handleClick}>Delete Contact</button>
  )
}

export default Button;