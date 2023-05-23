import { useState } from "react";
import ChildMemo from "./ChildMemo";

const ParentMemo = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const increase2 = () => {
        setCount2(count2 + 1);
    }
    
    return(
        <div>
            {/* 3 trường hợp khi dùng memo */}

            {/* #1 nếu ChildMemo(không được truyền props) không dùng memo khi ParentMemo re-render thì nó cũng re-render theo */}
            {/* <ChildMemo/> */}

            {/* #2 truyền props cho ChildMemo, vì state count thay đổi nên ParentMemo re-render thì ChildMemo cũng re-render theo là hiển nhiên */}
            {/* <ChildMemo count={count}/> */}
            
            {/* #3 ChildMemo chỉ re-render đúng với props được chuyền vào */}
            <ChildMemo count2={count2} />

            <h1>{count}</h1>
            <h1>{count2}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={increase2}>Increase</button>
        </div>
    )
}

export default ParentMemo;