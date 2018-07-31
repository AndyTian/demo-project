import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    SET_FILTER
} from './mutation-types.js'

let nextTodoId = 10;

export default {
    //添加todo
    [ADD_TODO](state, text){
        state.todos = [...state.todos, {text:text, id:nextTodoId++, completed: false}]
    },
    //
    [TOGGLE_TODO](state, id){
        state.todos = state.todos.map((todoItem) => {
            if(todoItem.id === id){
                return {...todoItem, completed:!todoItem.completed}
            }else{
                return todoItem
            }
        })
    },
    //
    [REMOVE_TODO](state, id){
        state.todos = state.todos.filter((todoItem) => {
            return todoItem.id !== id
        })
    },
    //
    [SET_FILTER](state, filterType){
        state.filter = filterType
    }
}
