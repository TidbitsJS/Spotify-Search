import React, { Component } from "react";
import "./album.css";

export class Album extends Component {
  render() {
    return (
      <div className="album-container">
        <div className="top-heading">
          <p>Your top generes</p>
        </div>
        <div className="album-grid"></div>
      </div>
    );
  }
}

export default Album;
