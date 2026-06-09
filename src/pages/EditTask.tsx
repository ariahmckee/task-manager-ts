// const EditTask = () => {
//   return (
//     <h1>Edit Task</h1>
//   )
// }

// export default EditTask

import { useNavigate, useParams } from "react-router-dom";

import TaskForm from "../components/TaskForm";

import { useTasks } from "../context/TaskContext";

const EditTask = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    tasks,
    updateTask,
  } = useTasks();

  const task = tasks.find(
    (task) => task.id === id
  );

  if (!task) {
    return <h2>Task not found</h2>;
  }

  return (
    <>
      <h1>Edit Task</h1>

      <TaskForm 
        initialTitle={task.title}
        initialDescription={task.description}
        initialStatus={task.status}
        initialPriority={task.priority}
        initialDueDate={task.dueDate}
        onSubmit={(
          taskData
        ) => {
          updateTask({
            id: task.id,
            ...taskData,
          });

          navigate("/");
        }}
      />
    </>
  );
};

export default EditTask;
