import { useContext } from "react";
import { themeContext } from "./UseContext";

const ChildChildUseContext = () => {
    const valueContext = useContext(themeContext);

    console.log(valueContext);
    
    return(
        <div
            style={valueContext.theme === 'dark' ? 
            {color: 'black', background: 'white'} : {}}
        >
            <h2>Hello child's child</h2>
            <p>
                Context provides a way to pass data through the
                component tree without having to pass props
                down manually at every level.
            </p>
        </div>

    )
}

export default ChildChildUseContext;