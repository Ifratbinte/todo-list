import React from 'react';
import { Todo } from '@/utils/types'; // Assuming you've defined the Todo interface

interface TaskListProps {
    tasks: Todo[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <div>
            <h2>Todo List</h2>
            <ul className='py-3'>
                {tasks.map((task) => (
                    <li key={task.id} className='flex items-center gap-2 py-2'>
                        <input type="checkbox" checked={task.completed} />
                        <span className='capitalize'>{task.item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;