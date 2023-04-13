import { useState, useRef, useEffect } from "react";


const UseRef2 = () => {
    // #1 in ra số liền trước
    const [count, setCount] = useState(60);

    const TimerId = useRef();
    const prevCount = useRef();

    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleStart = () => {
        TimerId.current = setInterval(()=>{
            setCount(prevCount => prevCount - 1);
        }, 1000)
        console.log('start: ', TimerId.current)
    }
    
    const handleStop = () => {
        clearInterval(TimerId.current);

        console.log('stop: ', TimerId.current)
    }

    console.log(count, prevCount.current);

    // #2 lưu được DOM element (giống như code thuần querySeclector)
    const h1Ref = useRef();
    useEffect(() => {
        console.log(h1Ref.current);
    })

    return (
        <div>
            {/* #1 */}
            {count}
            <br/>
            <button onClick={handleStop}>STOP</button>
            <button onClick={handleStart}>START</button>

            {/* #2 */}  
            <div ref={h1Ref}>
                get DOM element with useRef
            </div>
        </div>
    )
}

export default UseRef2;