import React, { Component } from "react";
import "./browse.css";

export class Browse extends Component {
  render() {
    return (
      <div className="browse-container">
        <div className="browse-heading">
          <p>Browse All</p>
        </div>
        <div className="album-grid"></div>
      </div>
    );
  }
}

export default Browse;
