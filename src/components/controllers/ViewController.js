import React from "react";
import { CustomInput, Label } from "reactstrap";

const ViewController = ({ view, changeView }) => {
  return (
    <div className="d-flex">
      <Label for="List-view" className="mr-4">
        <CustomInput
          type="radio"
          name="view"
          value="List"
          id="List-view"
          onChange={changeView}
          className="d-inline-block"
          checked={view === "List"}
        />
        ListView
      </Label>

      <Label for="Table-view" className="mr-4">
        <CustomInput
          type="radio"
          name="view"
          value="Table"
          id="Table-view"
          onChange={changeView}
          className="d-inline-block"
          checked={view === "Table"}
        />
        TableView
      </Label>
    </div>
  );
};
export default ViewController;
