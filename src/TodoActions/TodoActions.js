/**
 * Created by liujia on 2016/12/24.
 */

import TodoConstants from '../Constants/TodoConstants';

import TodoDispatcher from '../TodoDispatcher/TodoDispatcher';

const TodoActions = {

    loadData(){
        fetch('todos.json')
            .then((data) => data.json())
            .then((todos) => {
                TodoDispatcher.dispatch({
                    type: TodoConstants.LOAD_DATA,
                    todos
                });
            });
    },
    createItem(title){
        TodoDispatcher.dispatch({
            type: TodoConstants.CREATE_ITEM,
            title
        });
    },
    deleteItem(id){
        TodoDispatcher.dispatch({
            type: TodoConstants.DELETE_ITEM,
            id
        });
    },
    editeItem(title,id){
        TodoDispatcher.dispatch({
            type: TodoConstants.EDITE_ITEM,
            title,
            id
        });
    },
    toggleItem(id){
        TodoDispatcher.dispatch({
            type: TodoConstants.TOGGLE_ITEM,
            id
        });
    }
}


export default TodoActions;


