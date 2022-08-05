import React from 'react';
import {
  TaskContainer,
  CheckboxContainer,
  Circle,
  TaskText,
  DeleteContainer,
} from './task-item.styles';

const TaskItem = ({todo }) => {
  const {id, task} = todo;
  return (
    <TaskContainer key={id}>
      <CheckboxContainer>
        <Circle></Circle>
      </CheckboxContainer>
      <TaskText>{task}</TaskText>
      <DeleteContainer></DeleteContainer>
    </TaskContainer>
  );
};

export default TaskItem;
