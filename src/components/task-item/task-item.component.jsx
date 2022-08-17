import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme.context';
import { TodoContext } from '../../contexts/todos.context';
import { Draggable } from 'react-beautiful-dnd';
import { ReactComponent as Check } from '../../assets/icon-check.svg';
import cross from '../../assets/icon-cross.svg';
import {
  TaskContainer,
  CheckboxContainer,
  Circle,
  TaskText,
  DeleteContainer,
  CheckContainer,
  CheckImage,
} from './task-item.styles';

const TaskItem = ({ todo, index }) => {
  const theme = useContext(ThemeContext);
  const { toggleIsDone, deleteTodo } = useContext(TodoContext);
  const darkMode = theme.state.darkMode;
  const { id, task, isDone } = todo;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <TaskContainer
          isDark={darkMode}
          key={id}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <CheckboxContainer>
            <Circle
              isDone={isDone}
              isDark={darkMode}
              onClick={() => toggleIsDone(id)}
            ></Circle>
            <CheckContainer isDone={isDone} onClick={() => toggleIsDone(id)}>
              <Check />
            </CheckContainer>
          </CheckboxContainer>
          <TaskText isDone={isDone} isDark={darkMode}>
            {task}
          </TaskText>
          <DeleteContainer>
            <CheckImage src={cross} onClick={() => deleteTodo(id)} alt='X for delete' />
          </DeleteContainer>
        </TaskContainer>
      )}
    </Draggable>
  );
};

export default TaskItem;

