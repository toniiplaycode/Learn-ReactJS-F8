import {useState, createContext} from 'react';
import ChildUseContext from "./ChildUseContext";

// steps useContext
// 1.Create context (tạo context)
// 2.Provider (cung cấp dữ liệu)
// 3.Consumer (nhận dữ liệu )

export const themeContext = createContext(); //hàm createContext sẽ trả về 1 object có 2 properties quan trọng là Provider(dùng createContext() & value để cung cấp dữ liệu) và Comsumer(dùng useContext để lấy được dữ liệu)

const UseContext = () => { 
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const valueContext = {
        theme,
        toggleTheme
    }

    return(
        <>
            {/* khi không dùng useContext */}
            {/* <div>
                <button onClick={toggleTheme}>
                    Toggle theme
                </button>
                <ChildUseContext theme={theme}/>
            </div> */}
            
            {/* khi dùng useContext */}
            <themeContext.Provider value={valueContext}>
                <ChildUseContext/>
            </themeContext.Provider>
        </>
    )
}

export default UseContext;