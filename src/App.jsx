import './index.css'
import './component/heading.css'
import Addtodo from './component/Addtodo.jsx'
import Heading from './component/heading.jsx'
import TodoItems from './component/TodoItems.jsx'
import { useState } from 'react'
import {todoitems} from './Data/initialTodoitems.jsx'

function App() {

  

  const [todos, setTodos] = useState(todoitems);
  

  const addTodoHandler = (todoText, todoDate) => {
    const newTodo = {
      id: Math.random().toString(),
      todoText: todoText,
      todoDate: todoDate
    }
    setTodos((prevTodos) => [...prevTodos, newTodo]);

  }


  const deleteTodoHandler = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  }
  


  return (
    <>
    <center >
      <Heading title="Todo App"/>
      <Addtodo addTodoHandler={addTodoHandler}/>
      <TodoItems todoitems={todos} deleteTodoHandler={deleteTodoHandler}/>
    </center>
    </>
  )
}


export default App;
