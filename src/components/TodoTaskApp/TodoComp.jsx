import React, { useState } from "react";

function TodoComp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]); //Add new task in the array
    setInput(""); // clear the input field
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); //storing only those element which are not matching with remove index
    setTasks(updatedTasks); //update the task array
  };
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#F2F2F2",
        height: "auto",
        width: "80vh",
        margin: "50px auto",
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
        Todo✅Task
      </h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a Task"
        style={{
          marginRight: "8px",
          padding: "15px 20px",
          backgroundColor: "#e0e0e0",
          border: "0px",
          borderRadius: "20px",
          color: "purple",
          margin: "15px",
        }}
      />
      <button
        onClick={addTask}
        style={{
          marginLeft: "10px",
          borderRadius: "20px",
          padding: "10px 20px",
          color: "white",
          backgroundColor: "DodgerBlue",
          border: "0px",
        }}
      >
        Add Task
      </button>
      <ul
        style={{
          marginTop: "20px",

          listStyle: "none",
          padding: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "80%", // Ensure the list items take the full width
        }}
      >
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              marginLeft: "auto",
              display: "flex",
              justifyContent: "space-between",
              width: "70%",
              backgroundColor: "#eaecee",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            {task}{" "}
            <button
              onClick={() => removeTask(index)}
              style={{
                marginLeft: "10px",
                borderRadius: "20px",
                padding: "10px 15px",
                color: "white",
                backgroundColor: "#e74c3c",
                border: "0px",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoComp;
