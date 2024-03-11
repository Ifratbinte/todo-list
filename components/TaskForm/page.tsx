
import React, { useState } from 'react';
import { Todo } from '@/utils/types';

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
                id: Date.now().toString(), 
                item: taskText,
                completed: false,
            };
            onAddTask(newTask); 
            setTaskText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='flex items-center gap-5 w-full'>
                <input
                    type="text"
                    className='border border-slate-400 focus:border-purple-500 px-3 py-2 rounded-md w-3/4'
                    placeholder="Enter a task..."
                    value={taskText}
                    onChange={handleInputChange}
                />
                <button type="submit" className='p-2 bg-blue-500 text-white rounded-md w-1/4'>Add Task</button>
            </div>
        </form>
    );
};

export default TaskForm;
