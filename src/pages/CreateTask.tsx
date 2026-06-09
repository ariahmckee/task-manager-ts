// CreateTask.tsx
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import type { TaskPriority, TaskStatus } from "../types/Task";

import { useTasks } from "../context/TaskContext";

const CreateTask = () => {
  const navigate = useNavigate();

  const { addTask } = useTasks();

  const [title, setTitle] = useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [status, setStatus] = useState<TaskStatus>(
    "To Do"
  );

  const [
    priority,
    setPriority,
  ] = useState<TaskPriority>(
    "Medium"
  );

  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    addTask({
      id: crypto.randomUUID(),
      title,
      description,
      status,
      description,
      status,
      priority,
      dueDate,
    });

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Task</h1>

      <input 
        type="text" 
        placeholder="Title"
        value={title}
        onChange={(e) =>
          setTitle(
            e.target.value
          )
        }
      />

      <br />

      <textarea 
        placeholder="Description"
        value={description}
        onChange={(e) =>
          setDescription(
            e.target.value
          )
        }
      />

      <br />

      <button type="submit">
        Save Task
      </button>
    </form>    
  );
};

export default CreateTask;
