import './App.css';

import Home from './page/Home';
import Pizzas from './page/Pizzas';
import Movies from './page/Movies';

import { Routes, Route , NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <nav className='light-blue darken-1'>
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo">Logo</NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
              <NavLink activeclassname="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/pizzas">Pizzas</NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" to="/movies">Films</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pizzas' element={<Pizzas/>} />
        <Route path='/movies' element={<Movies/>} />
      </Routes>

    </div>
  );
}

export default App;
