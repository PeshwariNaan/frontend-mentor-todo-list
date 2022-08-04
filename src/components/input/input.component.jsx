import { useState, useContext } from 'react';
import { nanoid } from 'nanoid';

import {
  InputContainer,
  CircleContainer,
  StyledInput,
  ClearTextCircle,
} from './input.styles';

const TaskInput = () => {

  const [task, setTask] = useState('')


  const handleChange = (e) => {
    setTask(e.target.value)
    console.log(task)
  }

  return (
    <InputContainer>
      <CircleContainer>
      <ClearTextCircle></ClearTextCircle>
      </CircleContainer>
      <StyledInput 
      type='text' 
      placeholder=" Create a new todo..." 
      onChange={handleChange} 
      value={task} />
    </InputContainer>
  );
};

export default TaskInput;
