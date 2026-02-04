
import { useState } from "react";

function Tod() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
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

export default Tod;
