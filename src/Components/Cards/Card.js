import React, { Component } from "react";
import telgu from "../../Spotify Images/telgu.jpeg";
import "./card.css";

export class Card extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="card-container">
        <div className="text-block">{data.name}</div>
        <div className="image-block">
          <div className="image">
            <img src={data.img} alt="telgu" />
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
