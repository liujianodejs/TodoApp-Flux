/**
 * Created by liujia on 2016/12/24.
 */


import React, {Component} from 'react';
import TodoActions from '../TodoActions/TodoActions';
import TodoInputField from './TodoInputField';


class TodoInputFieldContainer extends Component {


    render() {

        return (
            <TodoInputField
                type="text"
                placeholder="请输入待办事项内容..."
                style={{width: 200,height: 25}}
                onKeyDown={(e) => {

                    if (e.keyCode === 13) {
                        TodoActions.createItem(e.target.value);
                        e.target.value = "";
                    }
                }}
            />
        )

    }
}

export default TodoInputFieldContainer;
