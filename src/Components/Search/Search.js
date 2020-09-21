import React, { Component } from "react";
import "./search.css";

export class Search extends Component {
  render() {
    return (
      <div className="search-container">
        <h1>Search</h1>
        <input type="text" placeholder="Artists, songs, or podcasts" />
      </div>
    );
  }
}

export default Search;
