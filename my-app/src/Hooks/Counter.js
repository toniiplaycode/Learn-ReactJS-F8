// useState

import {useState} from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    const handleIncrease = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <h3>{count}</h3>
            {/* vì hàm handleIncrease không có tham số nên chỉ cần tham chiếu đến là xong */}
            <button onClick={handleIncrease}>Increase</button> 
        </div>
    );
}

export default Counter;