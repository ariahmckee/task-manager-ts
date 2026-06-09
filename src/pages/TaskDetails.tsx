import { Link, useParams } from "react-router-dom";

import { useTasks } from "../context/TaskContext";

const TaskDetails = () => {
  const { id } = useParams();

  const { tasks } = useTasks();

  const task = tasks.find(
    (task) => task.id === id
  );

  if (!task) {
    return <h2>Task not found</h2>
  }

  return (
    <>
      <h1>{task.title}</h1>

      <p>
        <strong>
          Description:
        </strong>{" "}
        {task.description}
      </p>

      <p>
        <strong>
          Status:
        </strong>{" "}
        {task.status}
      </p>

      <p>
        <strong>
          Priority:
        </strong>{" "}
        {task.priority}
      </p>

      <p>
        <strong>
          Due Date:
        </strong>{" "}
        {task.dueDate || "Not set"}
      </p>

      <Link
        to={`/edit/${task.id}`}
      >
        Edit Task
      </Link>

      <br />

      <Link to="/">
        Back to Dashboard
      </Link>
    </>
  );
};

export default TaskDetails;
