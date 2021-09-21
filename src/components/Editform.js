import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
export default class EditForm extends React.Component {
  state = {
    text: "",
    description: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  formHandler = (e) => {
    e.preventDefault();
    this.props.toggleEdit(this.state, this.props);
    e.target.reset();
    this.setState({ text: "", description: "" });
  };

  render() {
    return (
      <Form onSubmit={this.formHandler}>
        <FormGroup>
          <Label>Add Task</Label>
          <Input
            placeholder="Enter Your Task"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Describe Task</Label>
          <Input
            placeholder="Enter Your Task's description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button type="submit"> Create Task</Button>
      </Form>
    );
  }
}
