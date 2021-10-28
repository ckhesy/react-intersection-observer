import logo from './logo.svg';
import './App.css';
import ReactInterSectionObserver from './components/react-intersection-observer';
// import RenderWhenActive from './components/renderWhenActive';
import TestCase from './components/testCase'
import TargetDom from './components/targetDom.tsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <ReactInterSectionObserver /> 
      {/* <TestCase /> */}
      <TargetDom />
    </div>
  );
}

export default App;
