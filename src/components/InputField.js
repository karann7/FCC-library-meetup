import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
   this.setState({ item: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTask(this.state.item);
    this.setState({ item: '' });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type='text' value={this.state.item} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default InputField;