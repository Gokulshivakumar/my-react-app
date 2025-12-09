import logo from './logo.svg';
import './App.css';
import Forheader from './components/header';
import Banner from './components/banner';
import Sectionlayerthree from './components/sectiontwo';


function App() {
  
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
<div>
    <Forheader />
    <Banner />
    <Sectionlayerthree />
    <p>Gokul</p>

</div>
   
  );
}

export default App;
