import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

import type { Task } from "../types/Task";

interface TaskContextType {
    tasks: Task[];

    addTask: (task: Task) => void;

    updateTask: (task: Task) => void;

    deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    // const [tasks, setTasks] = useState<Task[]>([]);
    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem("tasks");

        return saved
            ? (JSON.parse(saved) as Task[])
            : [];
    });

    useEffect(() => {
        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );
    }, [tasks]);

    const addTask = (task: Task) => {
        setTasks([...tasks, task]);
    };

    const updateTask = (updatedTask: Task) => {

        setTasks(
            tasks.map((task) =>
                task.id === updatedTask.id
                    ? updatedTask
                    : task
        )
    );
    };
    const deleteTask = (id: string) => {
        setTasks(
            tasks.filter((task) => task.id !== id)
        );
    };

    return(
        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                updateTask,
                deleteTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error(
            "useTasks must be used within TaskProvider"
        );
    }

    return context;
};
