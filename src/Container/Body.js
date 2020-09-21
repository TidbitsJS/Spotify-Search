import React, { Component } from "react";
import Search from "../Components/Search/Search";
import "./body.css";
import Album from "../Components/Albums/Album";
import Browse from "../Components/Browse/Browse";

export class Body extends Component {
  render() {
    return (
      <div className="body">
        <Search />
        <Album />
        <Browse />
      </div>
    );
  }
}

export default Body;
