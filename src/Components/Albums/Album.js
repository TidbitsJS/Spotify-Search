import React, { Component } from "react";
import "./album.css";
import top from "./AlbumData";
import Top from "./Top";

export class Album extends Component {
  render() {
    return (
      <div className="album-container">
        <div className="top-heading">
          <p>Your top generes</p>
        </div>
        <div className="album-grid">
          {top.map((album, index) => (
            <Top data={album} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default Album;
