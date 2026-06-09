// CreateTask.tsx

import { useNavigate } from "react-router-dom";

import TaskForm from "../components/TaskForm";

import { useTasks } from "../context/TaskContext";

const CreateTask = () => {
  const navigate = useNavigate();

  const { addTask } = useTasks();

  return (
    <>
      <h1>Create Task</h1>

      <TaskForm 
        onSubmit={(
          taskData
        ) => {
          addTask({
            id:
              crypto.randomUUID(),
              ...taskData,
          });

          navigate("/");
        }}
      />
    </>
  );
};

export default CreateTask;
