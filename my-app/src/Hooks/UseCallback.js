import { useState, useCallback } from "react";
import ChildUseCallback from "../HOC/ChildUseCallback";

const UseCallback = () => {
    const [count, setCount] = useState(0);
    
    // không dùng useCallback
    // const handleIncrease = () => {
    //     setCount(prevCount => prevCount + 1);
    // } 

    // dùng useCallback
    const handleIncrease = useCallback(() => {
        setCount(prevCount => prevCount + 1);
    }, []);

    return (
        <div>
            {/* khi không dùng useCallback thì khi props được truyền dạng tham chiếu(hàm, object, mảng) thì component con sẽ re-render lại khi tham chiếu này được gọi, vì biến handleIncrease là tham chiếu của callback. Mỗi lần setCount thì callback sẽ trả về 1 tham chiếu mới cho biến handleIncrease, nên khi truyền props qua cho component con, khi biến handleIncrease bị thay đổi (địa chỉ ô nhớ của nó thay đổi khi setCount) thì component con cũng re-render theo */}
            <ChildUseCallback onIncrease={handleIncrease}/>
            <h1>{count}</h1>
        </div>
    )
}

export default UseCallback;