import { useState, useContext } from 'react';
import { MainContainer } from './layout.styles';
import Header from '../header/header.component';
import TaskInput from '../input/input.component';
import TaskList from '../task-list/task-list.component';
import TaskBar from '../task-bar/taskbar.component';
import Footer from '../footer/footer';
import { TodoContext } from '../../contexts/todos.context';

const Layout = () => {
  const { todoItems } = useContext(TodoContext);
  const [filter, setFilter] = useState('All');

  const onFilterChangeHandler = (filter) => {
    setFilter(filter);
  };

  const filteringTodos = todoItems?.filter((todo) => {
    if (filter === 'All') return true;
    if (filter === 'Active' && !todo.isDone) return true;
    if (filter === 'Completed' && todo.isDone) return true;
    return false;
  });

  const todos = filteringTodos

  return (
    <MainContainer>
      <Header />
      <TaskInput />
      <TaskList todoList={todos} filter={filter} />
      <TaskBar onFilterChange={onFilterChangeHandler} filter={filter}/>
      <Footer />
    </MainContainer>
  );
};

export default Layout;
