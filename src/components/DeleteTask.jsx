import { useDispatch } from "react-redux";
import { removeTask } from "./state/slice"; // Import the removeTask action

const DeleteTask = ({ taskId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTask(taskId)); // Dispatch the action to remove the task by its ID
  };

  return <button onClick={handleDelete}>Delete</button>; // Button triggers the delete action
};

export default DeleteTask;
