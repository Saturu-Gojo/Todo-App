import Button from './button.jsx'
import { useRef } from 'react';



const Addtodo = ({addTodoHandler}) => {

  

  const todoTextRef = useRef();
  const todoDateRef = useRef();

  const addHandler = ()=>{
    const todoText = todoTextRef.current.value;
    const todoDate = todoDateRef.current.value;
    
    addTodoHandler(todoText, todoDate);
    todoTextRef.current.value = "";
    todoDateRef.current.value = "";
  }


  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
        <div className="row kg-row">
          <div className="col-5  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <input type="text" className="form-control" placeholder="Add your todo here"
            ref={todoTextRef} 
            />
          </div>
          <div className="col-3  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
            <input type="date" className="form-control" placeholder="Add your todo here" 
            ref={todoDateRef}
            />
          </div>
          <div className="col-2">
            <Button btnType="success" btnText="Add" handler={addHandler}/>
          </div>
        </div>
    </div>
    );
};

export default Addtodo;