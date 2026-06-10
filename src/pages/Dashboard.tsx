import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";


const Dashboard = () => {
    const {
        tasks,
        deleteTask,
    } = useTasks();

    // adding
    const todoCount = 
        tasks.filter(
            (task) =>
                task.status === "To Do"
        ).length;

    const inProgressCount = 
        tasks.filter(
            (task) =>
                task.status === "In Progress"
        ).length;

    const completedCount = 
        tasks.filter(
            (task) =>
                task.status === "Completed"
        ).length;           
    // added
    
    return (
        <>
            <h1>Task Dashboard</h1>

            <p>
                Total Tasks: {tasks.length}
            </p>

            {/* adding: */}
            <p>To Do: {todoCount}</p>

            <p>
                In Progress:
                {" "}
                {inProgressCount}
            </p>

            <p>
                Completed:
                {" "}
                {completedCount}
            </p>
            {/* added */}

            {tasks.length === 0 && (
                <p>
                    No tasks have been created yet.
                </p>
            )}

            <Link to="/create" className="create-link">
                <button>Create Task</button>
            </Link>

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
