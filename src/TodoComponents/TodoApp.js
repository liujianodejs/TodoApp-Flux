/**
 * Created by liujia on 2016/12/24.
 */

import React, { Component } from 'react';
import TodoHeaderContainer from './TodoHeaderContainer';
import TodoInputFieldContainer from './TodoInputFieldContainer';
import TodoListContainer from './TodoListContainer';

import TodoActions from '../TodoActions/TodoActions';

// Container pattern

class TodoApp extends Component {

    componentDidMount() {

        TodoActions.loadData();
    }

    render() {

        return (
            <span>
                <TodoHeaderContainer />
                <TodoInputFieldContainer />
                <TodoListContainer />
            </span>
        )
    }
}
export default TodoApp;