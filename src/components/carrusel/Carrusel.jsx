import { Component } from "react";
import headerStyles from "../header/header.css";
import carrusel1 from "../../img/carrousel-1.jpg";
import carrusel2 from "../../img/carrousel-2.jpg";
import carrusel3 from "../../img/carrousel-3.jpg";

class Carrusel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={carrusel3} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={carrusel1} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={carrusel2} />
          </div>
        </div>
      </div>
    );
  }
}

export default Carrusel;
