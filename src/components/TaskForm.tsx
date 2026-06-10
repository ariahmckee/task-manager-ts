// TaskForm.tsx

import { useState } from "react";

import type { 
    TaskPriority,
    TaskStatus,
 } from "../types/Task";

 import type { TaskFormErrors } from "../types/FormErrors";

 interface TaskFormProps {
    initialTitle?: string;
    initialDescription?: string;
    initialStatus?: TaskStatus;
    initialPriority?: TaskPriority;
    initialDueDate?: string;

    onSubmit: (
        taskData: {
            title: string;
            description: string;
            status: TaskStatus;
            priority: TaskPriority;
            dueDate: string;
        }
    ) => void;
 }

 const TaskForm = ({
    initialTitle = "",
    initialDescription = "",
    initialStatus = "To Do",
    initialPriority = "Medium",
    initialDueDate = "",

    onSubmit,
 }: TaskFormProps) => {
    const [title, setTitle] =
    useState(initialTitle);

    const [
        description,
        setDescription,
    ] = useState(initialDescription);

    const [status, setStatus] = useState<TaskStatus>(
        initialStatus
    );

    const [priority, setPriority] = useState<TaskPriority>(
        initialPriority
    );

    const [dueDate, setDueDate] = useState(initialDueDate);

    const [errors, setErrors] = useState<TaskFormErrors>({});

    const handleSubmit = (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        const newErrors:
            TaskFormErrors = {};

        if (!title.trim()) {
            newErrors.title = "Title is required";
        }

        if (title.trim().length < 3) {
            newErrors.title = 
            "Title must be at least 3 characters";
        }

        if (!description.trim()) {
            newErrors.description = 
            "Description is required";
        }

        if (description.trim().length < 10) {
            newErrors.description = 
            "Description must be at least 10 characters";
        }

        if (
            Object.keys(newErrors)
                .length > 0
        ) {
            setErrors(newErrors);
            return;
        }

        onSubmit({
            title,
            description,
            status,
            priority,
            dueDate,
        });
    };

    return (
        <form
            onSubmit={
                handleSubmit
            }
        >
            <div>
                <label>
                    Title *
                </label>
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

                {errors.title && (
                    <p>{errors.title}</p>
                )}
            </div>

            <div>
                <label>
                    Description *
                </label>
                <textarea
                    placeholder="Description"
                    value={
                        description
                    }
                    onChange={(e) =>
                        setDescription(
                            e.target.value
                        )
                    }
                />

                {errors.description && (
                    <p>{errors.description}</p>
                )}
            </div>

            <div>
                <label>Status:</label>

                <select
                    value={status}
                    onChange={(e) =>
                        setStatus(
                            e.target
                                .value as TaskStatus
                        )    
                    }
                >
                    <option>To Do</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>
            </div>

            <div>
                <label>Priority:</label>

                <select
                    value={priority}
                    onChange={(e) =>
                        setPriority(
                            e.target
                                .value as TaskPriority
                        )
                    }
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>

            <div>
                <label>Due Date</label>

                <input 
                    type="date"
                    value={dueDate}
                    onChange={(e) =>
                        setDueDate(
                            e.target.value
                        )
                    } 
                />
            </div>

            <button
                type="submit"
            >
                Save Task
            </button>
        </form>
    );
 };

 export default TaskForm;