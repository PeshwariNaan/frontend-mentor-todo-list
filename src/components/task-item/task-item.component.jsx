import React from 'react';
import {
  TaskContainer,
  CheckboxContainer,
  Circle,
  TaskText,
  DeleteContainer,
} from './task-item.styles';

const TaskItem = ({id, task, isDone }) => {
  return (
    <TaskContainer id={id}>
      <CheckboxContainer>
        <Circle></Circle>
      </CheckboxContainer>
      <TaskText>{task}</TaskText>
      <DeleteContainer></DeleteContainer>
    </TaskContainer>
  );
};

export default TaskItem;
