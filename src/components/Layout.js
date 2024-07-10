import React, { Component } from "react";
import Header from "./Header";

export class Layout extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <main style={{ height: "80vh" }}>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
