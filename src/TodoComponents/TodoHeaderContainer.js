/**
 * Created by liujia on 2016/12/24.
 */


import React, {Component} from 'react';
import TodoStore from '../TodoStore/TodoStore';
import TodoHeader from './TodoHeader';
import {Container} from 'flux/utils';

class TodoHeaderContainer extends Component {


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

        const todoCount = todos.filter((todo) => !todo.checked).length;

        return (
            <TodoHeader name="王菲" todoCount={todoCount}/>
        )

    }
}


export default TodoHeaderContainer = Container.create(TodoHeaderContainer);;
