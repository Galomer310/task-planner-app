// src/components/TaskList.jsx
import { useSelector } from "react-redux";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks); // Fetch tasks from Redux

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>{task.name}</p>
          <p>{task.duedate}</p>
          <DeleteTask taskId={task.id} /> {/* Pass taskId to DeleteTask */}
          <EditTask task={task} /> {/* Pass task to EditTask */}
        </div>
      ))}
    </>
  );
};

export default TaskList;
