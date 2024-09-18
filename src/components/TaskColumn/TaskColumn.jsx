import Task from "../Task/Task";

import "./TaskColumn.css";

const TaskColumn = ({ taskColumnName, tasks, handleDelete, setEditTask }) => {
  return (
    <>
      <section className="task_column">
        <h1 className="task_column_name">{taskColumnName}</h1>
        <div className="tasks_container">
          {tasks.map(
            (task, idx) =>
              task.status === taskColumnName && (
                <Task
                  key={idx}
                  task={task}
                  handleDelete={handleDelete}
                  idx={idx}
                  setEditTask={setEditTask}
                />
              )
          )}
        </div>
      </section>
    </>
  );
};

export default TaskColumn;
