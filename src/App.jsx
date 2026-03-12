import './index.css'
import './component/heading.css'
import Addtodo from './component/Addtodo.jsx'
import Heading from './component/heading.jsx'
import TodoItems from './component/TodoItems.jsx'

import { TodoItemsProvider } from './Store/TodoitemsContext.jsx';


function App() {

  return (
    <>
      <TodoItemsProvider>
        <center >
          <Heading title="Todo App"/>
          <Addtodo />
          <TodoItems/>
        </center>
      </TodoItemsProvider>
    </>
  )
}


export default App;
