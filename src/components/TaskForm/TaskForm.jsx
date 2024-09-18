import { useState, useEffect } from "react";
import Tag from "../Tag/Tag";

import "./TaskForm.css";

const TaskForm = ({ setTasks, editTask }) => {
  const [taskData, setTaskData] = useState({
    name: "",
    status: "ToDo",
    tags: [],
  });

  const seletedTags = (tagName) => {
    if (taskData.tags.some((tag) => tag === tagName)) {
      const filteredTags = taskData.tags.filter((item) => item !== tagName);
      setTaskData((prev) => ({ ...prev, tags: filteredTags }));
    } else {
      setTaskData((prev) => ({ ...prev, tags: [...taskData.tags, tagName] }));
    }
  };

  const checkedTags = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (editTask) {
      setTaskData({
        name: editTask.name,
        status: editTask.status,
        tags: editTask.tags,
      });
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editTask) {
      setTasks((prev) =>
        prev.map((task) => (task.name === editTask.name ? taskData : task))
      );
    } else {
      setTasks((prev) => [...prev, taskData]);
    }

    setTaskData({
      name: "",
      status: "ToDo",
      tags: [],
    });
  };

  const tags = ["HTML", "CSS", "JS", "REACT"];
  const status = ["ToDo", "Doing", "Done"];

  return (
    <>
      <header className="app_header">
        <div className="task_input">
          <input
            type="text"
            className="task_name"
            name="name"
            value={taskData.name}
            placeholder="Enter your task"
            onChange={handleChanges}
          />
        </div>
        <div>
          <div className="task_tag">
            {tags.map((tag, idx) => (
              <Tag
                key={idx}
                tagName={tag}
                seletedTags={seletedTags}
                checkedTags={checkedTags(tag)}
              />
            ))}
          </div>

          <select
            name="status"
            id="task_status"
            className="task_status"
            value={taskData.status}
            onChange={handleChanges}
          >
            {status.map((status, idx) => (
              <option key={idx} value={status}>
                {status}
              </option>
            ))}
          </select>

          <button type="submit" className="task_submit" onClick={handleSubmit}>
            Add Task
          </button>
        </div>
      </header>
    </>
  );
};

export default TaskForm;
