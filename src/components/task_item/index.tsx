import { Trash } from 'phosphor-react';
import styles from './index.module.css';
import { Instance } from 'mobx-state-tree';
import { store, todoModel } from '../../store';
import { observer } from 'mobx-react-lite';

export const TaskItem = observer(({
    todo,
}: {
    todo: Instance<typeof todoModel>
}) => {

    const handleChangeDone = () => todo.toggle();

    const handleDeleteTodo = () => store.deleteTodo(todo.id);

    return (
        <div className={styles.item} >
            <div>
                <label className={styles.check}>
                    <input type='checkbox' onChange={handleChangeDone} checked={todo.done} />
                    <span className={styles.checkMark} />
                </label>

                <p className={todo.done ? styles.market: ''} >{todo.name}</p>
            </div>
            
            <button onClick={handleDeleteTodo} >
                <Trash size={14} />
            </button>
        </div>
    )
})