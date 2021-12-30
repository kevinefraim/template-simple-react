import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import navbarImg from "../../img/header-simpsons.gif";
import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="header-container">
        <div className="left-container">
          <img src={navbarImg} />
          <ul className="menu-btn">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="right-container">
          <form action="#" className="form-search">
            <input type="text" placeholder="Search" className="input-search" />
            <button className="btn btn-outline-danger">Búsqueda</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
