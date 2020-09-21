import React, { Component } from "react";

export class Top extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="card-container" style={{ backgroundColor: data.bgColor }}>
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

export default Top;
