import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "#F2F2F2",
        height: "50vh",
        width: "80vh",
        margin: "auto",
        borderRadius: "20px",
      }}
    >
      <h1
        style={{
          padding: "30px",
          margin: "50px 90px",
          fontSize: "50px",
          color: "blue",
        }}
      >
        Counter App
      </h1>
      <h2 style={{ fontFamily: "monospace" }}>Current Count: {count}</h2>
      <button
        onClick={increment}
        style={{
          borderRadius: "20px",
          padding: "15px",
          margin: "10px",
          color: "white",
          backgroundColor: "Limegreen",
          border: "0px",
        }}
      >
        Increment
      </button>
      <button
        onClick={decrement}
        style={{
          borderRadius: "20px",
          padding: "15px",
          margin: "10px",
          color: "white",
          backgroundColor: "red",
          border: "0px",
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
