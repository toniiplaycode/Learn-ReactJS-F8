import { useReducer } from "react";

// steps of useState
// 1. init state: 0
// 2. actions: up (state + 1) / down (state - 1)

// steps of useReducer
// 1. init state: 0
// 2. actions: up (state + 1) / down (state - 1)
// 3. reducer
// 4. dispatch

// init state: khởi tạo state
const initState = 0;

// actions: các action
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
 
// reducer: hàm xử lý các action và trả về state mới, hàm reducer dùng 2 tham số là state, action
const reducer = (state, action) => {
    console.log('reducer running...');
    switch(action){
        case UP_ACTION: 
            return state + 1;
        case DOWN_ACTION: 
            return state - 1;
        default:
            throw new Error('Invalid action(hành động không hợp lệ)!');
    }
}

const UseReducer = () => {
    const [count, dispatch] = useReducer(reducer, initState);
    
    return(
        <div>
            <h2>{count}</h2>
            {/* hàm dispatch nhận tham số là action để gửi action tới hàm reducer xử lý */}
            <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>   
            <button onClick={() => dispatch(UP_ACTION)}>Up</button>        
        </div>
    )
}
export default UseReducer;