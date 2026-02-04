import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div  style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo App</h1>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={() => {
        setTasks([...tasks, task]);
        setTask("");
      }}>
        Add
      </button>

      {tasks.length === 0 && <p>No tasks available</p>}

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => {
              setTasks(tasks.filter((_, i) => i !== index));
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
