import Button from './button.jsx'

const TodoItem = (props) => {
    const {id, todoText, todoDate, deleteTodoHandler} = props;

    const addHandler = ()=>{
        console.log("Trying to remove event");
    }
    

  return (
    <div className="container">
        <div className="row kg-row">
            <div className="col-5 text-truncate">
                {todoText}
                
            </div>
            <div className="col-3 text-truncate">
                {todoDate}
            </div>
            <div className="col-2 text-truncatecol-2 group-hover:opacity-100 transition-opacity">
                <Button btnType="danger" btnText="Delete" handler={() => deleteTodoHandler(id)}/>
            </div>
        </div>
    </div>
    );
};

export default TodoItem;