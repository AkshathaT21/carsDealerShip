import "./App.css";
import Home from "./Components/Home/home";
import Cars from "./Components/Cars/CarsScreen";
import CarDetails from "./Components/CarDetails/carDetails";
import ContactUs from "./Components/ContactUs/contactUs";
import {Link} from 'react-router-dom'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/Cars">All cars</Link>
          </li>

          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/carDetails/:id" element={<CarDetails/>}/> 
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
