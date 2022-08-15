import { createContext, useEffect, useState, useReducer } from 'react';

export const TodoContext = createContext([]);

//action types for todos
export const TODO_ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
  CLEAR_COMPLETED: 'CLEAR_COMPLETED',
};

//initial State
const initialItems = [
  { id: 44593, task: 'Go to the store', isDone: false },
  { id: 44594, task: 'Do 300 pushups', isDone: true },
  { id: 44595, task: 'Find a real job', isDone: false },
];

const initialState = {
  todoItems: initialItems,
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case TODO_ACTION_TYPES.ADD_TODO:
      return {
        ...state,
        todoItems: [...state.todoItems, action.payload],
      };
    case TODO_ACTION_TYPES.TOGGLE_COMPLETED:
      return {
        ...state,
        todoItems: action.payload,
      };
    case TODO_ACTION_TYPES.DELETE_TODO:
      return {
        ...state,
        todoItems: action.payload,
      };
      case TODO_ACTION_TYPES.CLEAR_COMPLETED:
        return {
          ...state,
          todoItems: action.payload
        }
    default:
      return state;
  }
};

export const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const value = {
    todoItems: state.todoItems,

    //Action creators
    addTodoItem: (todo) => {
      dispatch({ type: TODO_ACTION_TYPES.ADD_TODO, payload: todo });
    },
    deleteTodo: (todoId) => {
      const deletedItemList = deleteItem(todoId);
      dispatch({
        type: TODO_ACTION_TYPES.DELETE_TODO,
        payload: deletedItemList,
      });
    },
    toggleIsDone: (todoId) => {
      const alteredTodoList = toggleDone(todoId);
      dispatch({
        type: TODO_ACTION_TYPES.TOGGLE_COMPLETED,
        payload: alteredTodoList,
      });
    },
    clearFinishedTodos: () => {
      const clearTodosList = clearCompleted();
      dispatch({ type: TODO_ACTION_TYPES.CLEAR_COMPLETED, payload: clearTodosList});
    },
  };

  //**Helper functions**

  //Toggle the isDone value in the todo object
  const toggleDone = (todoId) => {
    const updatedTodoList = state.todoItems.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    console.log(updatedTodoList);
    return updatedTodoList;
  };

  //Delete a todo
  const deleteItem = (todoId) => {
    const updatedTodoList = state.todoItems.filter(
      (todo) => todo.id !== todoId
    );
    return updatedTodoList;
  };

    //Clear out all finished todos
  const clearCompleted = () => {
    const updatedTodoList = state.todoItems.filter((todo) => !todo.isDone);
    return updatedTodoList;
  };

  // const getTodos = () => {
  //     let todoItems = []
  //     if(localStorage.getItem('todos')) {
  //         todoItems = JSON.parse(localStorage.getItem('todos'))
  //     }
  //     return todoItems
  // }

  // const [todos, setTodos] = useState(getTodos())

  // useEffect(() => {
  //     localStorage.setItem('todos', JSON.stringify(todos))
  //     console.log(todos)
  // }, [todos])

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
