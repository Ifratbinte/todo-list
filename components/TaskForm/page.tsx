// components/TaskForm.tsx

import React, { useState } from 'react';
import { Todo } from '@/utils/types'; // Assuming you've defined the Todo interface

interface TaskFormProps {
    onAddTask:  any;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskText(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (taskText.trim()) {
            const newTask: Todo = {
                id: Date.now().toString(), // Generate a unique ID (you can use any method)
                item: taskText,
                completed: false,
            };
            onAddTask(newTask); // Pass the new task to the parent component
            setTaskText(''); // Clear the input field
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex items-center gap-5'>
                <input
                    type="text"
                    className='border border-slate-200 px-3 py-2 rounded-md'
                    placeholder="Enter a task..."
                    value={taskText}
                    onChange={handleInputChange}
                />
                <button type="submit" className='px-4 py-2 bg-gray-300 rounded-md'>Add Task</button>
            </div>
        </form>
    );
};

export default TaskForm;
