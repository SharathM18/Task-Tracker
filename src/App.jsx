import { useState, useEffect } from "react";

import TaskForm from "./components/TaskForm/TaskForm";
import TaskColumn from "./components/TaskColumn/TaskColumn";
import useLocalStorage from "./components/useLocalStorage";
import "./App.css";

function App() {
  const { setItem, getItem } = useLocalStorage();

  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);

  const handleDelete = (taskIdx) => {
    const newTask = tasks.filter((task, idx) => idx !== taskIdx);
    setTasks(newTask);
  };

  useEffect(() => {
    if (tasks.length) {
      setItem("task", tasks);
    }
  }, [tasks]);

  useEffect(() => {
    setTasks(getItem("task"));
  }, []);

  return (
    <>
      <div className="container app">
        <TaskForm setTasks={setTasks} editTask={editTask} />
        <main className="app_main">
          <TaskColumn
            taskColumnName="ToDo"
            tasks={tasks}
            handleDelete={handleDelete}
            setEditTask={setEditTask}
          />
          <TaskColumn
            taskColumnName="Doing"
            tasks={tasks}
            handleDelete={handleDelete}
            setEditTask={setEditTask}
          />
          <TaskColumn
            taskColumnName="Done"
            tasks={tasks}
            handleDelete={handleDelete}
            setEditTask={setEditTask}
          />
        </main>
      </div>
    </>
  );
}

export default App;
