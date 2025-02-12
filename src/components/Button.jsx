import React from 'react'

function Button(props) {
  return (
    <button onClick={props.onClick}
    style={{padding:"10px", margin:"5px", borderRadius:"20px",border:"1px solid white", backgroundColor:"Dodgerblue", color:"white"}}>{props.label}</button>
  )
}

export default Button