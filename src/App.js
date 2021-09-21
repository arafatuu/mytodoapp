import React from "react";
import TodoProvider from "./components/context/TodoProvider";

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <TodoProvider />
      </div>
    );
  }
}
