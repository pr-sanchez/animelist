import React, { Component, Fragment } from "react";
import Navbar from "./components/navbar";
import Animes from "./components/animes";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Animes />
      </Fragment>
    );
  }
}

export default App;
