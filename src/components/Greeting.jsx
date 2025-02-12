/* eslint-disable react/prop-types */

// Props (short for "properties") are used to pass data from a parent component to a child component.
import Button from "./Button";
function Greeting(props) {
  // props.name = "Nishant"; props are immutable cannot be changed by the child component
  const style = {
    color: props.color || "blue",
    backgroundColor: "beige",
    padding: "10px",
    borderRadius: "20px",
  };

  const handleClick = (name) => alert(`Hello ${name}!`);
  return (
    <>
      <div>
        <h1 style={style}>Hello,{props.name}!</h1>
        <p>Welcome to Learn React!!</p>
        <p>Your batch is : {props.batch}</p>
        <Button label={props.name} onClick={() => handleClick(props.name)} />
      </div>
    </>
  );
}

export default Greeting;
