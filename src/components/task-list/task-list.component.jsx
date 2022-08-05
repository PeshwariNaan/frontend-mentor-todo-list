import React, { useContext } from 'react'
import TaskItem from '../task-item/task-item.component'
import {TodoContext} from '../../contexts/todos.context'
import {ListContainer} from './task-list.styles'


const TaskList = () => {
    const { todos } = useContext(TodoContext)

  return (
    <ListContainer>
      
      {todos.map((todo) => {
        return <TaskItem key={todo.id} todo={todo} />;
      })}
     
    </ListContainer>
  )
}

export default TaskList