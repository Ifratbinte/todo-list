'use client'
import TaskForm from "@/components/TaskForm/page";
import TaskList from "@/components/TaskList/page";
import { useState } from "react";

export default function Home() {

  const [tasks, setTasks] = useState<any[]>([]);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };
  return (
    <div className="w-1/4 mx-auto my-20">
      <TaskForm onAddTask={handleAddTask}/>
      <div className="mt-4 py-3">
          <TaskList tasks={tasks} />
      </div>
    </div>
  );
}
