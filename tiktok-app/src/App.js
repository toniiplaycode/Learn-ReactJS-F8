import logo from './logo.svg';
import './App.css';
import Counter from './Hooks/Counter';
import Info from './Hooks/Info';
import Todo from './Hooks/Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Counter/> */}
        {/* <Info/> */}
        <Todo/>
      </header>
    </div>
  );
}

export default App;
