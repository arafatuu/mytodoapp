import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const FilterController = ({ handleFilter }) => {
  return (
    <ButtonGroup>
      <Button className="buttonBackCol" onClick={() => handleFilter("All")}>
        All
      </Button>
      <Button className="buttonBackCol" onClick={() => handleFilter("Running")}>
        Running
      </Button>
      <Button
        className="buttonBackCol"
        onClick={() => handleFilter("Completed")}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
};
export default FilterController;
