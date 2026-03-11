import TodoItem from './TodoItem.jsx'


const TodoItems = ({todoitems, deleteTodoHandler}) => {
    

    return (
        <>
        {todoitems.map((item) => (
          <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate}
           deleteTodoHandler={deleteTodoHandler}/>
        ))}
        </>
    );
  };
  
  export default TodoItems;