import { Component } from "react";
import headerImg from "../../img/header-simpsons.gif";
import headerStyles from "../header/header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header>
        <div className="header-container">
          <div className="left-container">
            <img src={headerImg} alt="" />
            <ul className="menu-btn">
              <li>Inicio</li>
              <li>Blog</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className="right-container">
            <form action="#" className="form-search">
              <input
                type="text"
                placeholder="Search"
                className="input-search"
              />
              <button className="btn btn-outline-danger">Búsqueda</button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
