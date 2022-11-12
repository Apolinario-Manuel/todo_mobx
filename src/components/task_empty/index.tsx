import clipBoard from '../../assets/clipboard.svg';
import styles from './index.module.css';

export const TaskEmpty = () => (
    <div className={styles.empty} >
        <img src={clipBoard}  alt='clipboard' className={styles.image} />

        <div className={styles.description}>
            <p className={styles.title}> Você ainda não tem tarefas cadastradas </p>
            <p className={styles.subTitle}> Crie tarefas e organize seus itens a fazer </p>
        </div>
    </div>
)