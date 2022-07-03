import { useState } from 'react';
import ClipboardImg from '../assets/clipboard.svg';
import { TaskItem } from './TaskItem';
import styles from './TaskList.module.css';

interface Task {
    id: number;
    description: string;
    finished: boolean; 
}

interface TaskProps {    
    tasks: Task[];
    onToggleTaskState: (tasks: Task[]) => void;
    onDeleteTask: (tasks: Task[]) => void;
}

export function TaskList({ tasks, onToggleTaskState, onDeleteTask }: TaskProps) {
    const finishedTasks = tasks.filter(task => task.finished === true).length;

    function handleToggleTaskState(id: number) {
        const newTasks = tasks.map(task => {
            if (task.id === id)
            {
                task.finished = !task.finished;
            }
            return task;
        });

        onToggleTaskState(newTasks);
    }

    function handleDeleteTask(id: number) {
        const newTasks = tasks.filter(task => task.id !== id);
        
        onDeleteTask(newTasks);
    }

    return (
        <section className={styles.TaskList}>
            <header>
                <p className={styles.createdTasks}>Tarefas criadas<span>{tasks.length}</span></p>
                <p className={styles.finishedTasks}>
                    Tarefas concluídas<span>{tasks.length < 0 ? 0 : (`${finishedTasks} de ${tasks.length}`) }</span>
                </p>
            </header>
            {
                tasks.length > 0 ? 
                (
                    tasks.map(task => <TaskItem 
                                        onToggleTaskState={() => {handleToggleTaskState(task.id)}} 
                                        onDeleteTask={() => {handleDeleteTask(task.id)}}
                                        task={task} 
                                        key={task.id} 
                                    />
                    )
                )
                :
                (
                    <>
                        <hr />
                        <div className={styles.Content}>
                            <img src={ClipboardImg} alt="clipboard" />
                            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </>
                )
            }
            
        </section>
    )
}