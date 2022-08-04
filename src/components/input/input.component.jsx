import { useState, useContext } from 'react';
import { nanoid } from 'nanoid';

import {
  InputContainer,
  CircleContainer,
  StyledInput,
  ClearTextCircle,
} from './input.styles';

const TaskInput = () => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = nanoid();
    task.trim();
     if(task === '') return;

     

  }

  const clearInput = () => {
    setTask('')
  }

  const handleChange = (e) => {
    setTask(e.target.value);
    console.log(task);
  };

  return (
    <form onSubmit={handleSubmit}>
    <InputContainer>
      <CircleContainer>
        <ClearTextCircle onClick={clearInput}></ClearTextCircle>
      </CircleContainer>
      
        <StyledInput
          type="text"
          placeholder=" Create a new todo..."
          onChange={handleChange}
          value={task}
        />
    
    </InputContainer>
    </form>
  );
};

export default TaskInput;
