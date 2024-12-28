import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTask } from "./state/slice"; // Import the `addTask` action
import DatePicker from "./DatePicker"; // Import DatePicker component

const AddTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks); // Get current tasks from Redux

  const [taskName, setTaskName] = useState(""); 
  const [dueDate, setDueDate] = useState(""); 

  // Function to handle task name change
  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  // Function to handle date change, passed to DatePicker
  const handleDateChange = (date) => {
    setDueDate(date);
  };

  // Function to add the new task to Redux store
  const handleAddTask = () => {
    if (taskName.trim() && dueDate) {
      dispatch(
        addTask({
          name: taskName,
          duedate: dueDate,
        })
      );
      // Reset the form inputs
      setTaskName("");
      setDueDate("");
    } else {
      alert("Please fill in the task name and due date.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={handleTaskNameChange}
      />
      <DatePicker onDateChange={handleDateChange} /> {/* Pass the handler to DatePicker */}
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
