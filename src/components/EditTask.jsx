import { useDispatch } from "react-redux";
import { editTask } from "./state/slice";

const EditTask = ({ task }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    const newName = prompt("Enter new task name:", task.name); // Prompt for new task name
    const newDate = prompt("Enter new due date (YYYY-MM-DD):", task.duedate); // Prompt for new due date

    if (newName && newDate) {
      dispatch(editTask({ id: task.id, name: newName, duedate: newDate })); // Dispatch the action to Redux
    } else {
      alert("Task name and due date cannot be empty.");
    }
  };

  return <button onClick={handleEdit}>Edit</button>; // Button triggers the edit
};

export default EditTask;
