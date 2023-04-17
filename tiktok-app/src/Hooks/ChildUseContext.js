// khi không dùng useContext
// import ChildChildUseContext from "./ChildChildUseContext";
// const ChildUseContext = ({theme}) => {
//     return(
//         <div>
//             <ChildChildUseContext theme={theme}/>
//         </div>
//     )
// }
// export default ChildUseContext;

// khi dùng useContext thì không cần props trung gian
import ChildChildUseContext from "./ChildChildUseContext";
import { useContext } from "react";
import { themeContext } from "./UseContext";


const ChildUseContext = () => {
    const valueContext = useContext(themeContext);    
    return(
        <div>
            <button onClick={valueContext.toggleTheme}>
                Toggle theme
            </button>
            <ChildChildUseContext/>
        </div>
    )
}
export default ChildUseContext;