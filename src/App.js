import "./App.css";
import CheckArea from "./components/CheckArea.js";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      row: 10,
      column: 10,
      colors: 4,
      square: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Check input change
  handleChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value,
    });
  }

  // Check submit form
  handleSubmit(event) {
    this.setState({
      square: this.createSquare([
        this.state.row,
        this.state.column,
        this.state.colors,
      ]),
    });
    event.preventDefault();
  }

  createSquare(inputs) {
    let square = [];

    // Define colors
    let colors = [
      "green",
      "red",
      "blue",
      "white",
      "brown",
      "yellow",
      "orange",
      "grey",
      "purple",
      "pink",
    ];

    // shuffle colors
    colors = colors.sort((a, b) => 0.5 - Math.random());

    // Generate array for square with random
    for (let i = 0; i < inputs[1]; i++) {
      square.push([]);
      for (let j = 0; j < inputs[0]; j++) {
        square[i][j] = colors[Math.floor(Math.random() * inputs[2])];
      }
    }

    return square;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label>
              Row
              <input
                type="number"
                name="row"
                min="1"
                value={this.state.row}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Column
              <input
                type="number"
                name="column"
                min="1"
                value={this.state.column}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Colors
              <input
                type="number"
                name="colors"
                value={this.state.colors}
                onChange={this.handleChange}
                min="1"
                max="10"
                style={{ width: "57%" }}
              />
              <span>(max: 10)</span>
            </label>
            <input type="submit" value="Submit" />
          </form>
          <CheckArea inputs={this.state.inputs} square={this.state.square} />
        </header>
      </div>
    );
  }
}

export default App;
