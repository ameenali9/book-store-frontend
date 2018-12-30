import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Components/cards"
import NavBar from "./Components/NavBar"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
        <div>
            <Cards />
            <NavBar />
        </div>

    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));