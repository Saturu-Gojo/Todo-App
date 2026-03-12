import { useContext } from 'react';
import Button from './button.jsx'
import { TodoItemsContext } from '../Store/TodoitemsContext.jsx';

const TodoItem = (props) => {
    const {id, todoText, todoDate} = props;
    const {deleteTodoHandler} = useContext(TodoItemsContext);

    // const addHandler = ()=>{
    //     console.log("Trying to remove event");
    // }
    

  return (
    <div className="container">
        <div className="row kg-row">
            <div className="col-5 text-truncate">
                {todoText}
                
            </div>
            <div className="col-3 text-truncate">
                {todoDate}
            </div>
            <div className="col-2 text-truncate col-2 group-hover:opacity-100 transition-opacity">
                <Button btnType="danger" btnText="Delete" handler={() => deleteTodoHandler(id)}/>
            </div>
        </div>
    </div>
    );
};

export default TodoItem;