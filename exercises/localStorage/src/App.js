import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    todoItems: [],
    theme: "light",
  };

  /*
   * For this exercise, try to set and get data from localStorage and use this data to update the todoItems and theme in the state object
   * You will need to use JSON.parse() to get data from localStorage and convert it to a js array
   * https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
   */
  componentDidMount() {
    // check if localStorage data exists
    // if localStorage exists update state using setState if data exists
    let chosenTheme = localStorage.getItem("chosenTheme");
    if (chosenTheme) {
      this.setState({
        theme: chosenTheme,
      });
    }

    let todoItems = localStorage.getItem("todoItems");
    if (todoItems) {
      this.setState({
        todoItems: JSON.parse(todoItems),
      });
    }
  }

  /*
   * When new items are added try to set localStorage with the array of items
   * You will need to use JSON.stringify() to format the js array into a string in order to save in localStorage
   */
  handleFormSubmit = (event) => {
    event.preventDefault();
    const item = event.target.todoItem.value;
    this.setState(
      {
        todoItems: [...this.state.todoItems, item], // ...spread operator used to copy array https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Copy_an_array
      },
      () => {
        localStorage.setItem("todoItems", JSON.stringify(this.state.todoItems));
      }
    );
  };

  /*
   * When theme toggle button is clicked try to set localStorage with the value of theme
   * Because it's already a string you can save that value into localStorage without using JSON.stringify
   */
  handleThemeToggle = (_event) => {
    this.setState(
      {
        theme: this.state.theme === "light" ? "dark" : "light",
      },
      () => {
        localStorage.setItem("chosenTheme", this.state.theme);
      }
    );
  };

  render() {
    // we can conditionally set our CSS class based on current theme value
    const appClass = this.state.theme === "dark" ? "App App--dark" : "App";

    return (
      <div className={appClass}>
        <h1>Todo</h1>
        <p>
          <button onClick={this.handleThemeToggle}>
            Toggle {this.state.theme === "light" ? "dark 🌙" : "light ☀️"} theme
          </button>
        </p>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="todoItem" placeholder="todo item" />
          <button type="submit">add item</button>
        </form>
        <ul className="todo-list">
          {this.state.todoItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
