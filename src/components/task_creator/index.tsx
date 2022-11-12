import { observer } from 'mobx-react-lite';
import { PlusCircle } from 'phosphor-react';
import React from 'react';
import styles from './index.module.css';
import { v4 as uuidv4 } from 'uuid';
import { store } from '../../store';


export const TaskCreator = observer(() => {

    const [newTask, setNewTask] = React.useState('');

    const isNewTaskEmpty = newTask.length === 0;

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value)
    }

    const handleCreateTask = () => {
        setNewTask('');

        store.addTodo(uuidv4(), newTask);
    }

    return (
        <div className={styles.creator}>
            <input
                placeholder='Adicione uma nova tarefa'
                value={newTask}
                onChange={handleChangeValue}           
            />

            <button
                onClick={handleCreateTask}
                disabled={isNewTaskEmpty}
            >
                Criar <PlusCircle />
            </button>
        </div>
    )
})