import React, { Component } from 'react';

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ''
    }
  }
  handleChange(e) {
   this.setState({ item: e.target.value});
   console.log(this.state.item);
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default InputField;