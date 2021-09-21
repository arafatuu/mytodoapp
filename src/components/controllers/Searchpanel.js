import React from "react";
import { Input } from "reactstrap";

const SearchPanel = ({ term, searchTermHandle, toggleForm }) => (
  <div className="d-flex">
    <Input
      placeholder="Enter Search Term"
      className="mr-3"
      value={term}
      onChange={searchTermHandle}
    />
  </div>
);

export default SearchPanel;
