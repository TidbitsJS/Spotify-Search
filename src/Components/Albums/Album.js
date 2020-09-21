import React, { Component } from "react";
import "./album.css";
import Card from "../Cards/Card";

export class Album extends Component {
  render() {
    return (
      <div className="album-container">
        <div className="top-heading">
          <p>Your top generes</p>
        </div>
        <div className="album-grid">
          {/* <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    );
  }
}

export default Album;
