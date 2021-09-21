import React from "react";
import { Col, Row } from "reactstrap";
import BulkController from "./BulkController";
import FilterController from "./FilterController";
import SearchPanel from "./Searchpanel";
import ViewController from "./ViewController";
const Controllers = ({
  term,
  handleSearch,
  toggleForm,
  handleFilter,
  view,
  changeView,
  clearSelected,
  clearCompleted,
  reset,
  searchTermHandle,
}) => {
  return (
    <>
      <div>
        <SearchPanel
          term={term}
          searchTermHandle={searchTermHandle}
          toggleForm={toggleForm}
        />
      </div>
      <Row className="my-4">
        <Col md={{ size: 4 }}>
          <FilterController handleFilter={handleFilter} />
        </Col>
        <Col md={{ size: 4 }}>
          <ViewController view={view} changeView={changeView} />
        </Col>
        <Col md={{ size: 4 }}>
          <BulkController
            clearCompleted={clearCompleted}
            clearSelected={clearSelected}
            reset={reset}
          />
        </Col>
      </Row>
    </>
  );
};
export default Controllers;
