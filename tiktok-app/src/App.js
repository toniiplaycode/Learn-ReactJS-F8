import logo from './logo.svg';
import './App.css';
import Counter from './Hooks/Counter';
import Info from './Hooks/Info';
import Todo from './Hooks/Todo';
import MountUnmout from './Hooks/MountUnmout';
import UseEffect from './Hooks/UseEffect';
import UseEffect2 from './Hooks/UseEffect2';
import UseEffect3 from './Hooks/UseEffect3';

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

        <button onClick = {() => setShow(!show)}>toggle</button>
        {show && <UseEffect3/>} 
      </header>
    </div>
  );
}

export default App;
