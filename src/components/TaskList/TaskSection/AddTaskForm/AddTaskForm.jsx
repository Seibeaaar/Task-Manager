import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import './AddTaskForm.scss';

class AddTaskForm extends Component {
  state = {
    inputValue: ''
  }
  inputHandler = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <div>
        <textarea value={this.state.inputValue} onChange={this.inputHandler} className="task__input" placeholder="Enter your task here"></textarea>
        <div className="btn__container">
          <button className="confirm__btn" onClick={() => {
            this.props.addTask(this.props.sectionId, this.state.inputValue);
            this.props.toggleAddMode(false);
          }}>
            Add task
          </button>
          <button onClick={() => this.props.toggleAddMode(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    )
  }
}

export default AddTaskForm;