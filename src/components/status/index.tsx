import { values } from 'mobx';
import { observer } from 'mobx-react-lite';
import { getSnapshot } from 'mobx-state-tree';
import { store } from '../../store';
import styles from './index.module.css';

export const Status = observer(() => {

    const createdTaskCount = values(store.todos).length;

    const completedTaskCount = store.completedCount;

    return (
        <div className={styles.status}>

            <div className={styles.tag} >
                <span className={styles.labelCreated} >Tarefas criadas </span>
                <span className={styles.count} > { createdTaskCount } </span>
            </div>

            <div className={styles.tag}>
                <span className={styles.labelCompleted} >Concluidas </span>
                <span className={styles.count} > { completedTaskCount > 0 ? `${completedTaskCount} de ${createdTaskCount}` : 0 } </span>
            </div>
        </div>
    )
})