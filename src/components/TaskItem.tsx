import { CheckCircle, Circle, Trash } from 'phosphor-react';
import styles from './TaskItem.module.css';

interface TaskProps {
    task: {
        description: string;
        finished: boolean;
    },
    onToggleTaskState: () => void,
    onDeleteTask: () => void,
}

export function TaskItem({ task, onToggleTaskState, onDeleteTask }: TaskProps) {
    return (
        <div className={styles.TaskItem}>
            {task.finished ? 
                (<button onClick={onToggleTaskState}><CheckCircle size={24} color="var(--purple-dark)" weight="fill"/></button>)
                :
                (<button onClick={onToggleTaskState}><Circle size={24} color="var(--blue)"/></button>)
            }
            <p className={task.finished ? styles.finished : ''}>{task.description}</p>
            <button onClick={onDeleteTask}>
                <Trash size={24} color="var(--gray-300)" />
            </button>
        </div>
    )
}