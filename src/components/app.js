import React, { Component } from 'react';
import InputField from './InputField';
import TaskList from './TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Tasks: [] } ;
    this.addTask = this.addTask.bind(this);
    this. completeTask = this. completeTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  addTask() {

  }
  completeTask() {

  }
  removeTask() {
    
  }
  render() {
    return (
      <div>
      <InputField addTask={this.addTask}/>
      <TaskList />
      </div>
    );
  }
}

export default App;