import React, { Component } from "react";
import Search from "../Components/Search/Search";
import "./body.css";

export class Body extends Component {
  render() {
    return (
      <div className="body">
        <Search />
      </div>
    );
  }
}

export default Body;
