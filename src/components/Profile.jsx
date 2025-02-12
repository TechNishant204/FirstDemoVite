/* eslint-disable react/prop-types */
import Button from "./Button";
function Profile(props) {
  const handleClick = (name) => alert(`Hello ${name}!`);
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Profession: {props.profession}</p>
      <Button label={props.name} onClick={() => handleClick(props.name)} />
    </div>
  );
}

export default Profile;
