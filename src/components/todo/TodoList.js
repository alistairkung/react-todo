import React from 'react'
import {TodoItem} from './TodoItem'
export const TodoList = (props) => {
  return (
    <div className="todo-list">
      <ul>
        {props.todos.map(todo => <TodoItem key={todo.id} {...todo}/>
          )}
      </ul>
    </div>
  )
}
