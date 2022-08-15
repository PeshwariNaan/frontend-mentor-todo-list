import { useContext } from 'react';
import { ReactComponent as Cross } from '../../assets/icon-cross.svg';
import { ThemeContext } from '../../contexts/theme.context';
import { TodoContext } from '../../contexts/todos.context';
import {
  TaskContainer,
  CheckboxContainer,
  Circle,
  TaskText,
  DeleteContainer,
} from './task-item.styles';

const TaskItem = ({ todo }) => {
  const theme = useContext(ThemeContext);
  const { toggleIsDone, deleteTodo } = useContext(TodoContext);
  const darkMode = theme.state.darkMode;
  const { id, task, isDone } = todo;

  return (
    <TaskContainer isDark={darkMode} key={id}>
      <CheckboxContainer>
        <Circle isDark={darkMode} onClick={() => toggleIsDone(id)}></Circle>
      </CheckboxContainer>
      <TaskText isDone={isDone} isDark={darkMode}>{task}</TaskText>
      <DeleteContainer>
        <Cross onClick={() => deleteTodo(id)} />
      </DeleteContainer>
    </TaskContainer>
  );
};

export default TaskItem;
