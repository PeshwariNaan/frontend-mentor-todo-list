import React, { useContext, useState, useEffect } from 'react';
import TaskItem from '../task-item/task-item.component';
import { TodoContext } from '../../contexts/todos.context';
import { ThemeContext } from '../../contexts/theme.context';
import { ListContainer, NoticeText, NoticeContainer } from './task-list.styles';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const TaskList = ({ todoList, filter }) => {
  const [notice, setNotice] = useState('');
  const theme = useContext(ThemeContext);
  const { reorderList, todoItems } = useContext(TodoContext);
  const darkMode = theme.state.darkMode;

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

  const handleOnDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const newOrderTodos = [...todoItems];
    const [draggedItem] = newOrderTodos.splice(source.index, 1);
    newOrderTodos.splice(destination.index, 0, draggedItem);
    reorderList(newOrderTodos)    
  };

  return (
    <>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {todoList.length > 0 ? (
          <Droppable droppableId="todos">
            {(provided) => (
              <ListContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
                isDark={darkMode}
              >
                {todoList.map((todo, index) => {
                  return (
                    <TaskItem
                      key={todo.id}
                      todo={todo}
                      id={todo.id}
                      index={index}
                    />
                  );
                })}
                {provided.placeholder}
              </ListContainer>
            )}
          </Droppable>
        ) : (
          <NoticeContainer>
            <NoticeText isDark={darkMode}>{notice}</NoticeText>
          </NoticeContainer>
        )}
      </DragDropContext>
    </>
  );
};

export default TaskList;
