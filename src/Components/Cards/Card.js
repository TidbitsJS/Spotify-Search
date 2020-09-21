import React, { Component } from "react";
import telgu from "../../Spotify Images/telgu.jpeg";
import "./card.css";

export class Card extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="text-block">Telgu</div>
        <div className="image-block">
          <div className="image">
            <img src={telgu} alt="telgu" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
