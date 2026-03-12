import { createContext, useState } from "react";
import { initialTodoitems } from "./initialTodoitems";


export const TodoItemsContext = createContext();

export const TodoItemsProvider = ({ children }) => {
    const [todos, setTodos] = useState(initialTodoitems);

    const addTodoHandler = (todoText, todoDate) => {
        const newTodo = {
           
            id: Date.now().toString(), 
            todoText, 
            todoDate
        };
        setTodos((prevTodos) => [...prevTodos, newTodo]);
    };

    const deleteTodoHandler = (todoId) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
    };

    return (
        <TodoItemsContext.Provider value={{ todos, addTodoHandler, deleteTodoHandler }}>
            {children}
        </TodoItemsContext.Provider>
    );
};