import "./Task.css";

const Task = ({ task, checkedTags = true, handleDelete, idx, setEditTask }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JS: { backgroundColor: "#ffd12c" },
    REACT: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "white" },
  };
  return (
    <>
      <div className="task">
        <div className="task_func">
          <p>{task.name}</p>
          <div className="btn">
            <i
              className="bi bi-pencil-square"
              onClick={() => setEditTask(task)}
            ></i>
            <i className="bi bi-trash3" onClick={() => handleDelete(idx)}></i>
          </div>
        </div>
        <div className="tags">
          {task.tags.map((item, idx) => (
            <button
              key={idx}
              type="button"
              style={checkedTags === true ? tagStyle[item] : tagStyle.default}
              className="selected_tags"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Task;
