import { useState, useRef } from "react";


const UseRef = () => {
    const [count, setCount] = useState(60);
    
    // let TimerId; // biến TimerId này sẽ undefined khi component re-render, nên hàm handleStop sẽ không clearInterval được 

    // dùng useRef để biến TimerId không bị set lại khi component re-render
    const TimerId = useRef();

    const handleStart = () => {
        TimerId.current = setInterval(()=>{
            setCount(prevCount => prevCount - 1);
        }, 100)
        console.log('start: ', TimerId.current)
    }
    
    const handleStop = () => {
        clearInterval(TimerId.current); // clearInterval theo id

        console.log('stop: ', TimerId.current)
    }

    return (
        <div>
            {count}
            <br/>
            <button onClick={handleStop}>STOP</button>
            <button onClick={handleStart}>START</button>
        </div>
    )
}

export default UseRef;