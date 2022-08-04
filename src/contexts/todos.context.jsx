import { createContext, useEffect, useState } from 'react';

export const TodoContext = createContext([]);

export const ToDoProvider = ({children}) => {
    const getTodos = () => {
        let todoItems = []
        if(localStorage.getItem('todos')) {
            todoItems = JSON.parse(localStorage.getItem('todos'))
        }
        return todoItems
    }

    const [todos, setTodos] = useState(getTodos())

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        console.log(todos)
    }, [todos])

    return (
        <TodoContext.Provider value={{todos, setTodos}}>{children}</TodoContext.Provider>
    )

}
