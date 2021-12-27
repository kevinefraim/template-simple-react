import { Component } from "react";
import CardsStyles from "./cards.css";
import bartImg from "../../img/bart.jpg";
import maggieImg from "../../img/maggie.jpg";
import homerImg from "../../img/homer.jpg";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cards-container bg-warning ">
        <div class="card">
          <img class="card-img-top " src={maggieImg} alt="character" />
          <div class="card-body">
            <h5 class="card-title">Maggie Simpson</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button class="btn btn-danger">Go somewhere</button>
          </div>
        </div>

        <div class="card">
          <img class="card-img-top " src={homerImg} alt="character" />
          <div class="card-body">
            <h5 class="card-title">Homero Simpson</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button class="btn btn-danger">Go somewhere</button>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top " src={bartImg} alt="character" />
          <div class="card-body">
            <h5 class="card-title">Bart Simpson</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button class="btn btn-danger">Go somewhere</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
