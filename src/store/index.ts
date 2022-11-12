import { values } from "mobx";
import { types } from "mobx-state-tree";

const todoModel = types
    .model({
        id: types.identifier,
        name: types.optional(types.string, ""),
        done: types.optional(types.boolean, false),
    })
    .actions(self => ({
        toggle(){
            self.done = !self.done
        }
    }))


const rootStore = types
    .model({
        todos: types.map(todoModel)
    })
    .views(self => ({
        get completedCount(){
            return values(self.todos).filter(todo => todo.done).length
        }
    }))
    .actions(self => ({
        addTodo(id: string, name: string){
            self.todos.set(id, todoModel.create({ id, name }))
        },
        deleteTodo(id: string){
            self.todos.delete(id)
        }
    }))


const store = rootStore.create()

export { store, todoModel };