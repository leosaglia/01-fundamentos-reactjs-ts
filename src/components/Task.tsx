import { useState } from 'react';
import { AddTaskForm } from "./AddTaskForm";
import { TaskList } from './TaskList';
import styles from './Task.module.css';

interface Task {    
    id: number;
    description: string;
    finished: boolean;    
}

export function Task() {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            description: "voluptatum corporis utem, nobis minus adipisci assumenda? Ad, maiores pariatur.",
            finished: false
        },
        { 
            id: 2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi labore sapiente.",
            finished: true
        },
    ]);
    
    function handleAddNewTask(task: string){
        const newTask: Task = { id: tasks.length + 1, description: task, finished: false }
        setTasks(state => [...state, newTask]);
    }

    function handleToggleTaskState(tasks: Task[]) {
        setTasks(tasks);
    }

    function handleDeleteTask(tasks: Task[]) {
        setTasks(tasks);
    }

    return (
        <section className={styles.Task}>            
            <AddTaskForm onAddNewTask={handleAddNewTask}/>
            <TaskList 
                tasks={tasks}   
                onToggleTaskState={handleToggleTaskState}
                onDeleteTask={handleDeleteTask}    
            />
        </section>
    )
}