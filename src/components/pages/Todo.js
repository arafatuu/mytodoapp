import React, { useContext } from "react";
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import TodoContext from "../context/TodoContext";
import Controllers from "../controllers/";
import CreateTodoForm from "../CreateTodoForm";
import EditForm from "../Editform";
import ListView from "../View/ListView";
import TableView from "../View/TableView";
const Todo = () => {
  const context = useContext(TodoContext);
  const {
    isOpenTodoForm,
    isOpenTodoEditForm,
    toggleComplete,
    toggleSelect,
    toggleForm,
    toggleEdit,
    createTodo,
    searchTerm,
    view,
    handleSearch,
    handleFilter,
    changeView,
    clearSelected,
    clearCompleted,
    reset,
    searchTermHandle,
    performSearch,
    performFilter,
    toggleEditForm,
  } = context;
  let todos = performSearch();
  todos = performFilter(todos);

  return (
    <div className="container">
      <h2 className="display-4 text-center mb-5">This is Todo List</h2>

      <div class="text-center">
        <Button onClick={toggleForm} className="my-3 addButton">
          Add New Task
        </Button>
      </div>

      <Controllers
        term={searchTerm}
        handleSearch={handleSearch}
        toggleForm={toggleForm}
        handleFilter={handleFilter}
        view={view}
        changeView={changeView}
        clearSelected={clearSelected}
        clearCompleted={clearCompleted}
        reset={reset}
        searchTermHandle={searchTermHandle}
        toggleEdittoggleEdit={toggleEdit}
        toggleEditForm={toggleEditForm}
      />
      {view === "List" ? (
        <ListView
          todos={todos}
          performSearch={performSearch}
          toggleComplete={toggleComplete}
          toggleSelect={toggleSelect}
          toggleEdit={toggleEdit}
        />
      ) : (
        <TableView
          todos={todos}
          performSearch={performSearch}
          toggleComplete={toggleComplete}
          toggleSelect={toggleSelect}
          toggleEdit={toggleEdit}
        />
      )}
      <Modal isOpen={isOpenTodoForm} toggle={toggleForm}>
        <ModalHeader toggle={toggleForm}>Create New Todo Item</ModalHeader>
        <ModalBody>
          <CreateTodoForm createTodo={createTodo} />
        </ModalBody>
      </Modal>

      <Modal isOpen={isOpenTodoEditForm} toggle={toggleEditForm}>
        <ModalHeader toggle={toggleEditForm}>Create New Todo Item</ModalHeader>
        <ModalBody>
          <EditForm toggleEdit={toggleEdit} />
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Todo;
