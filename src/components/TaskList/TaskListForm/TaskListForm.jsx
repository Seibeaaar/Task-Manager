import React, {Component} from 'react';

class TaskListForm extends Component {
  state = {
    sectionName: ''
  }
  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  addSection = () => {
    this.props.addSection(this.state.sectionName);
    this.props.goToDefault();
  }
  render() {
    return (
      <div>
        <textarea onChange={this.inputHandler} name="sectionName" value={this.state.sectionName} placeholder="Enter the name of your section here"></textarea>
        <button onClick={this.addSection}>Confirm</button>
      </div>
    )
  }
}

export default TaskListForm;