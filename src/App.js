import React, { Component, Fragment } from "react";
import Navbar from "./components/navbar";
import Animes from "./components/animes";
class App extends Component {
  state = {
    count: 0
  };
  handleCount = count => {
    if (count > this.state.count) {
      this.setState({ count });
    }
  };
  render() {
    return (
      <Fragment>
        <Navbar count={this.state.count} />
        <Animes handleCount={this.handleCount} />
      </Fragment>
    );
  }
}

export default App;
