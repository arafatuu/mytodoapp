import React from "react";
import { Button, ButtonGroup } from "reactstrap";

const BulkController = ({ clearCompleted, clearSelected, reset }) => {
  return (
    <ButtonGroup>
      <Button className="buttonBackCols" onClick={clearSelected}>
        Clear Selected
      </Button>
      <Button className="buttonBackCols" onClick={clearCompleted}>
        Clear Completed
      </Button>
      <Button className="buttonBackCols" onClick={reset}>
        Reset
      </Button>
    </ButtonGroup>
  );
};
export default BulkController;
