'use client'
import React, { useState } from 'react';
import { Todo } from '@/utils/types';
import { FiTrash2 } from "react-icons/fi";

interface TaskListProps {
    tasks: Todo[];
    onTaskComplete: (index: number) => void;
    onTaskDelete: (index: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskComplete, onTaskDelete }) => {
    const [completedTasks, setCompletedTasks] = useState<boolean[]>(new Array(tasks?.length).fill(false));

    const handleTaskComplete = (index: number) => {
        const updatedCompletedTasks = [...completedTasks];
        updatedCompletedTasks[index] = !completedTasks[index];
        setCompletedTasks(updatedCompletedTasks);
        onTaskComplete(index);
    };

    return (
        <>
            <ul className='py-3'>
                {tasks?.map((task, index) => (
                    <li key={task.id} className='flex items-center justify-between py-3 px-5 my-3 rounded-md bg-white border border-purple-200'>
                        <div className='flex items-center gap-3'>
                            <input
                                type="checkbox"
                                checked={completedTasks[index]}
                                onChange={() => handleTaskComplete(index)}
                            />
                            <span className={completedTasks[index] ? 'completed text-green-500 line-through' : ''}>{task.item}</span>
                        </div>
                        <button className="bg-red-100 text-red-600 border border-red-200 rounded p-1 cursor-pointer" onClick={() => onTaskDelete(index)}><FiTrash2/></button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default TaskList;