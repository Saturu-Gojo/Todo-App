import { TodoItemsContext } from '../Store/TodoitemsContext.jsx';
import TodoItem from './TodoItem.jsx'
import {useContext} from "react"



const TodoItems = () => {

  const {todos} = useContext(TodoItemsContext);
    

    return (
        <>
        {todos.map((item) => (
          <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate}
           />
        ))}
        </>
    );
  };
  
  export default TodoItems;