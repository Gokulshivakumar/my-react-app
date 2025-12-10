import './App.css';
import Aboutus from './Websitegv/Pages/Aboutus.js';
import Homepage from './Websitegv/Pages/Home.jsx';
import Forheader from './Websitegv/components/header.js';
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <HashRouter>
    
      <Forheader />

      {/* Page content changes based on URL */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />
        {/* Add more pages like Services, Contact */}
      </Routes>
    </HashRouter>
  );
}

export default App;
