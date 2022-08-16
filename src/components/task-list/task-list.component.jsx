import React, { useContext, useState, useEffect } from 'react';
import TaskItem from '../task-item/task-item.component';
import { TodoContext } from '../../contexts/todos.context';
import { ThemeContext } from '../../contexts/theme.context'
import { ListContainer, NoticeText, NoticeContainer } from './task-list.styles';
//import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TaskList = ({ todoList, filter }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode
  const [notice, setNotice] = useState('');
  const emptyListNotice = (filter) => {
    if (filter === 'All') {
      setNotice('You have no todos!');
    }
    if (filter === 'Active') {
      setNotice('You have no active todos');
    }
    if (filter === 'Completed') {
      setNotice('You have no completed todos!');
    }
  };
  useEffect(() => {
    emptyListNotice(filter);
  }, [filter]);

  return (
    <>
    {todoList.length > 0 ? (

    <ListContainer isDark={darkMode}>      
        {todoList.map((todo) => {
          return <TaskItem key={todo.id} todo={todo} id={todo.id} />;
        })}
    </ListContainer> ) : (
      <NoticeContainer>
      <NoticeText isDark={darkMode}>{notice}</NoticeText>
      </NoticeContainer>
    )}    
    </>
  );
};

export default TaskList;
