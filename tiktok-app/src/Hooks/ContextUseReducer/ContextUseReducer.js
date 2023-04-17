// Dùng Context kết hợp với UseReducer
import { useStore, actions } from "./store";

const ContextUseReducer = () =>{
    const [state, dispatch] = useStore();
    const {todos, todoInput} = state;

    const handleSubmit = () => {
        dispatch(actions.addTodo(todoInput));
    }

    console.log('todos: ', todos);

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
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ContextUseReducer;