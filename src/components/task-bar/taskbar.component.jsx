import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme.context';
import { TodoContext } from '../../contexts/todos.context';
import {
  TaskBarContainer,
  RemainingItemsContainer,
  FilterContainer,
  ClearItemsContainer,
  Filter,
  Text,
} from './taskbar.styles';

const TaskBar = ({onFilterChange}) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode


  const { todoItems, clearFinishedTodos } = useContext(TodoContext);
  const filterCategories = [
    { id: 1, category: 'All' },
    { id: 2, category: 'Active' },
    { id: 3, category: 'Completed' },
  ];

  const activeTodoNumber = (todoItems.filter((todo) => !todo.isDone).length);

  return (
    <TaskBarContainer isDark={darkMode}>
      <RemainingItemsContainer>
        <Text isDark={darkMode}>{activeTodoNumber} items left</Text>
      </RemainingItemsContainer>
      <FilterContainer>
        {filterCategories.map((filteredCategory) => (
          <Filter
            isDark={darkMode}
            key={filteredCategory.id}
            active={filteredCategory.id}
            onClick={() => onFilterChange(filteredCategory.category)}
          >
            {filteredCategory.category}
          </Filter>
        ))}
      </FilterContainer>
      <ClearItemsContainer>
        <Filter isDark={darkMode} onClick={clearFinishedTodos}>Clear completed</Filter>
      </ClearItemsContainer>
    </TaskBarContainer>
  );
};

export default TaskBar;
