'use client'
import TaskForm from "@/components/TaskForm/page";
import TaskList from "@/components/TaskList/page";
import { useState } from "react";

export default function Home() {

  const [tasks, setTasks] = useState<any[]>( () => {
    const savedTasks = localStorage.getItem('TASKS');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };

 
  const handleTaskComplete = (taskId: any) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const saveTasks = (updatedTasks: any) => {
    localStorage.setItem('TASKS', JSON.stringify(updatedTasks));
  };

  const handleTaskDelete = (index: number) => {
    const deleteTasks = tasks.filter((_, i) => i !== index);
    setTasks(deleteTasks);
  };
  
  const clearAllTask = () => {
    setTasks([]);
  };

  return (
    <div className="w-full md:w-3/4 lg:w-1/3 mx-auto my-20 bg-gray-100 shadow-mg lg:p-14 p-4 rounded">
      <div className="flex items-center justify-between pb-8">
          <div className="text-xl text-center">Todo List</div>
          <button className="bg-red-500 text-white px-2 py-1 rounded-md" onClick={clearAllTask}>Clear</button>
      </div>
      
      <TaskForm onAddTask={handleAddTask}/>
      <div className="mt-4 py-3">
          <TaskList tasks={tasks} onTaskComplete={handleTaskComplete} onTaskDelete={handleTaskDelete}/>
      </div>
    </div>
  );
}
