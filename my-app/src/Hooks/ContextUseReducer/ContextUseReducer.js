// Dùng Context kết hợp với UseReducer
import { useStore, actions } from "./store";

const ContextUseReducer = () =>{
    const [state, dispatch] = useStore();
    const {todos, todoInput} = state;

    const handleSubmit = () => {
        dispatch(actions.addTodo(todoInput));
    }

    const handleDelete = (index) => {
        dispatch(actions.deleteTodo(index));
    }

    return( 
        <div>
            <input
                value={todoInput}
                placeholder="Enter todo..."
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value));
                }}
            />
            <button onClick={handleSubmit}>ADD</button>
            <ul>
                {todos.map((todo, index) => {
                    return(
                        <li key={index}>
                            {todo}
                            <button onClick={() => handleDelete(index)}>&times;</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ContextUseReducer;