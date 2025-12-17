import './App.css';
import Aboutus from './Websitegv/Pages/Aboutus.js';
import Homepage from './Websitegv/Pages/Home.jsx';
import Testpage from './Websitegv/Pages/Test.js';
import Forheader from './Websitegv/components/header.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    
      <Forheader />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/test" element={<Testpage />} />
        {/* Add more pages like Services, Contact */}
      </Routes>
    </Router>
  );
}

export default App;
