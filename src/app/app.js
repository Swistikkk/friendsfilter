import React, {Component} from "react";
import {render} from "react-dom";
import Filter from "./modules/friendsfilter";

class App extends Component {
  render() {
    return(
      <Filter />
    )
  }
};

render(
  <App />,
  document.getElementById("app")
)
