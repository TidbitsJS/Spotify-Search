import React, { Component } from "react";
import "./browse.css";
import data from "../Cards/Data";
import Card from "../Cards/Card";

export class Browse extends Component {
  render() {
    return (
      <div className="browse-container">
        <div className="browse-heading">
          <p>Browse All</p>
        </div>
        <div className="browse-grid">
          {data.map((album, index) => (
            <Card data={album} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default Browse;
