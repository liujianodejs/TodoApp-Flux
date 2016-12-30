/**
 * Created by liujia on 2016/12/24.
 */


import React, {Component} from 'react';
import TodoStore from '../TodoStore/TodoStore';
import TodoActions from '../TodoActions/TodoActions';
import TodoList from './TodoList';
import {Container} from 'flux/utils';

class TodoListContainer extends Component {


    static getStores() {
        return [TodoStore];
    }

    static calculateState(prevState) {
        return {
            todos: TodoStore.getState(),
        };
    }

    render() {

        const {
            todos
        } = this.state;

        return (
            <TodoList
                todos={todos}
                toggleItemFunc={TodoActions.toggleItem}
                deleteItemFunc={TodoActions.deleteItem}
                editeItemFunc={TodoActions.editeItem}
            />
        )

    }
}


export default TodoListContainer = Container.create(TodoListContainer);
