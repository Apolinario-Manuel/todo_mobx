import { Header } from './components/header';
import { TaskCreator } from './components/task_creator';
import './global.css';
import styles from './App.module.css';
import { Status } from './components/status';
import { EmptyAlert } from './components/empty_alert';
import { TaskItem } from './components/task_item';
import { values } from 'mobx';
import { observer } from 'mobx-react-lite';
import { store } from './store';



const App = observer(() => {

  return (
    <div>
      <Header />

      <div className={styles.wrapper} >
        <TaskCreator />

        <Status />

        { 
          ( values(store.todos).length > 0) ? 
          values(store.todos).map((todo, id) => 
              <TaskItem 
                key={id}
                todo={todo} 
              />
            )
            : <EmptyAlert />
        }  
      </div>
    </div>
  )
})

export default App
