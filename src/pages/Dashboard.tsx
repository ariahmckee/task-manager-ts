import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

const Dashboard = () => {
    const {
        tasks,
        deleteTask,
    } = useTasks();
    
    return (
        <>
            <h1>Dashboard</h1>

            <Link to="/create">
                Create Task
            </Link>

            {tasks.length === 0 && (
                <p>No task yet.</p>
            )}

            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>

                    <p>
                        Status:
                        {" "}
                        {task.status}
                    </p>

                    <Link to={`/task/${task.id}`}>
                        View
                    </Link>

                    {" | "}

                    <Link to={`/edit/${task.id}`}>
                        Edit
                    </Link>

                    {" | "}

                    <button
                        onClick={() =>
                            deleteTask(task.id)
                        }
                    >
                        Delete
                    </button>
                </div>
            ))}
        </>
    );
};

export default Dashboard;
