import { useState, useRef } from "react";


const UseRef = () => {
    const [count, setCount] = useState(60);
    
    // -----không dùng useRef--------
    // let TimerId; // biến TimerId này sẽ undefined khi component re-render, nên hàm handleStop sẽ không clearInterval được 
    // const handleStart = () => {
    //     TimerId = setInterval(()=>{
    //         setCount(prevCount => prevCount - 1);
    //     }, 100)
    //     console.log('start: ', TimerId)
    // }
    
    // console.log(TimerId)

    // const handleStop = () => {
    //     clearInterval(TimerId); // clearInterval theo id

    //     console.log('stop: ', TimerId)
    // }


    // -----dùng useRef--------
    //dùng useRef để biến TimerId không bị set lại khi component re-render
    const TimerId = useRef();
    
    console.log(TimerId)

    const handleStart = () => {
        TimerId.current = setInterval(()=>{
            setCount(prevCount => prevCount - 1);
        }, 500)
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