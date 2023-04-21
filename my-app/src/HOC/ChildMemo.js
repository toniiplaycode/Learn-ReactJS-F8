import { memo } from "react";

// //#1  nếu ChildMemo(không được truyền props) không dùng memo khi ParentMemo re-render thì nó cũng re-render theo 
// const ChildMemo = () => {
//     console.log('call child memo');
//     return(
//         <div>
//             Hello Memo
//         </div>
//     )
// }

// #2 truyền props cho ChildMemo, vì state count thay đổi nên ParentMemo re-render thì ChildMemo cũng re-render theo là hiển nhiên
// const ChildMemo = ({ count }) => {
//     console.log('call child memo');

//     return(
//         <div>
//             Hello Memo {count}
//         </div>
//     )
// }

// #3 ChildMemo chỉ re-render đúng với props được chuyền vào
const ChildMemo = ({ count2 }) => {
    console.log('call child memo', count2);

    return(
        <div>
            Hello Memo
        </div>
    )
}

// không dùng memo
// export default ChildMemo; 

// có dùng memo
export default memo(ChildMemo); 