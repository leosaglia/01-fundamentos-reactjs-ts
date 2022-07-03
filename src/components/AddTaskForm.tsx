import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './AddTaskForm.module.css';

interface AddTaskFormProps {
    onAddNewTask: (task: string) => void;
}

export function AddTaskForm({ onAddNewTask }: AddTaskFormProps) {
    const [newTask, setNewTask] = useState('');

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setNewTask(event.target.value)
    }

    function handleAddNewTask(event: FormEvent) {
        event.preventDefault();
        onAddNewTask(newTask);
        setNewTask('');
    }

    return (
        <form className={styles.Form} onSubmit={handleAddNewTask}>
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa"
                onChange={handleNewTaskChange}
                value={newTask}
            />
            <button type="submit">
                Criar
                <PlusCircle size={16} weight="bold"/>
            </button>
        </form>
    )
}