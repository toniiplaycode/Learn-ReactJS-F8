import { memo } from "react";

const ChildUseCallback = ({onIncrease}) => {
    console.log('call child use callback');

    return (
        <div>
            <button onClick={onIncrease}>Increase</button>
        </div>
    )
}

export default memo(ChildUseCallback);