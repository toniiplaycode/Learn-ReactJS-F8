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

import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Counter/> */}

        {/* <Info/> */}

        {/* <Todo/> */}

        {/* {show && <MountUnmout/>} */}
        {/* <button onClick = {() => setShow(!show)}>toggle</button> */}

        {/* <button onClick = {() => setShow(!show)}>toggle</button>
        {show && <UseEffect/>} */}

        {/* <button onClick = {() => setShow(!show)}>toggle</button>
        {show && <UseEffect2/>}  */}

        {/* <UseRef/> */}

        {/* <UseRef2/> */}

        <ParentMemo/>

      </header>
    </div>
  );
}

export default App;
