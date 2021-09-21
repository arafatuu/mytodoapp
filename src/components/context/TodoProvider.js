import React from "react";
import shortid from "shortid";
import Todo from "../pages/Todo";
import TodoContext from "./TodoContext";
export default class TodoProvider extends React.Component {
  state = {
    todos: [
      {
        id: "kkjhfdkl",
        text: "This is a defdault task",
        description: "description to describe the task",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "dujdhjdhd",
        text: "This is Another Task",
        description: "description to describe the task description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
      {
        id: "fdjdjjdhdgs",
        text: "Another Default Task",
        description: "description to describe the task description",
        time: new Date(),
        isComplete: false,
        isSelect: false,
      },
    ],
    isOpenTodoForm: false,
    isOpenTodoEditForm: false,
    searchTerm: "",
    view: "List",
    filter: "All",

    //Functions

    toggleComplete: (todoId) => {
      const todos = [...this.state.todos];
      const todo = todos.find((t) => t.id === todoId);
      todo.isComplete = !todo.isComplete;
      this.setState({
        todos: todos,
      });
    },

    toggleSelect: (todoId) => {
      const todos = [...this.state.todos];
      const todo = todos.find((t) => t.id === todoId);
      todo.isSelect = !todo.isSelect;
      this.setState({
        todos: todos,
      });
    },
    toggleEdit: (todoId, text, des) => {
      const todos = [...this.state.todos];
      const todo = todos.find((t) => t.id === todoId);
      todo.text = text;
      todo.description = des;
      this.setState({
        todos: todos,
      });
    },
    toggleForm: () => {
      this.setState({
        isOpenTodoForm: !this.state.isOpenTodoForm,
      });
    },
    toggleEditForm: () => {
      this.setState({
        isOpenTodoEditForm: !this.state.isOpenTodoEditForm,
      });
    },

    searchTermHandle: (e) => {
      this.setState({
        searchTerm: e.target.value,
      });
    },
    performSearch: () => {
      return this.state.todos.filter((todo) =>
        todo.text.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
    },

    createTodo: (todo) => {
      todo.id = shortid.generate();
      todo.time = new Date();
      todo.isComplete = false;
      todo.isSelect = false;

      const todos = [todo, ...this.state.todos];
      this.setState({ todos });
      this.state.toggleForm();
    },
    handleFilter: (filter) => {
      this.setState({
        filter,
      });
    },
    performFilter: (todos) => {
      const { filter } = this.state;
      if (filter === "Running") {
        return todos.filter((todo) => !todo.isComplete);
      } else if (filter === "Completed") {
        return todos.filter((todo) => todo.isComplete);
      } else return todos;
    },
    changeView: (e) => {
      this.setState({
        view: e.target.value,
      });
    },
    clearSelected: () => {
      const todos = this.state.todos.filter((todo) => !todo.isSelect);
      this.setState({
        todos,
      });
    },
    clearCompleted: () => {
      const todos = this.state.todos.filter((todo) => !todo.isComplete);
      this.setState({
        todos,
      });
    },
    reset: () => {
      this.setState({
        isOpenTodoForm: false,
        searchTerm: "",
        view: "List",
        filter: "All",
      });
    },
  };

  render() {
    return (
      <TodoContext.Provider value={this.state}>
        <Todo />
      </TodoContext.Provider>
    );
  }
}
