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
  addTask(task) {
    let obj = {};
    obj.taskName = task;
    obj.complete = false;
    this.setState({
      tasks: this.state.Tasks.concat(obj)
    });
  }
  completeTask() {

  }
  removeTask() {
    
  }
  render() {
    return (
      <div>
      <InputField addTask={this.addTask}/>
      <TaskList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;