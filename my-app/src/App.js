import logo from './logo.svg';
import './App.css';
import Counter from './Hooks/Counter';
import Info from './Hooks/Info';
import Todo from './Hooks/Todo';
import MountUnmout from './Hooks/MountUnmout';
import UseEffect from './Hooks/UseEffect';
import UseEffect2 from './Hooks/UseEffect2';
import UseRef from './Hooks/UseRef';
import UseRef2 from './Hooks/UseRef2';
import ParentMemo from './HOC/ParentMemo';
import UseCallback from './Hooks/UseCallback';
import UseMemo from './Hooks/UseMemo';
import UseReducer from './Hooks/UseReducer';
import ToDoUseReducer from './Hooks/ToDoUseReducer';
import UseContext from './Hooks/UseContext';
import ContextUseReducer from './Hooks/ContextUseReducer/ContextUseReducer';
import {StoreProvider} from './Hooks/ContextUseReducer/store';
import ForwardRef from './Hooks/ForwardRef/ForwardRef';
// import CssModule1 from './CSSModule-clsx/CssModule1';
// import CssModule2 from './CSSModule-clsx/CssModule2';
import ReactRouterDom from './ReactRouterDom/ReactRouterDom';
import ToDoListFullFeature from './Exercise/ToDoListFullFeature';
import ListUser from './Exercise/ListUser/ListUser';

import { useState } from 'react';
import AAAA from './Hooks/ATest';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <AAAA/> */}

        {/* <Counter/> */}

        {/* <Info/> */}

        {/* <Todo/> */}

        {/* {show && <MountUnmout/>} */}
        {/* <button onClick = {() => setShow(!show)}>toggle</button> */}

        <button onClick = {() => setShow(!show)}>toggle</button>
        {show && <UseEffect/>}  

        {/* <button onClick = {() => setShow(!show)}>toggle</button>
        {show && <UseEffect2/>}  */} 

        {/* <UseRef/> */}

        {/* <UseRef2/> */}

        {/* <ParentMemo/> */}

        {/* <UseCallback/> */}

        {/* <UseMemo/> */}

        {/* <UseReducer/> */}

        {/* <ToDoUseReducer/> */}
        
        {/* <UseContext/> */}

        {/* <StoreProvider>
          <ContextUseReducer/>
        </StoreProvider> */}

        {/* <ForwardRef/> */}

        {/* <CssModule1/>
        <CssModule2/> */}

        {/* <ReactRouterDom/> */}

        {/* <ToDoListFullFeature/> */}

        {/* <ListUser/> */}
      </header>
    </div>
  );
}

export default App;
