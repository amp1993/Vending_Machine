import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {Chips, Soda, Chocolate, HardCandy} from "./Snacks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/chocolate" element={<Chocolate />} />
          <Route path="/hardcandy" element={<HardCandy />} />
   

        </Routes>
      </BrowserRouter>    
      </div>
  );
}

export default App;
