/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from "react";
import Cards from "./Cards";
import SearchBox from "./searchBox";
import { robots } from "./robots";
import "./App.css";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = { robots: robots, searchField: "" };
  }
  onSearchChange = (event) => {
    this.setState({
      robots: robots.filter((robo) => {
        return robo.name.includes(event.target.value);
      }),
    });
  };
  render() {
    return (
      <div className="tc">
        <h1 className="f1">
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a href="#">Robo Friends</a>
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <Cards robots={this.state.robots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
