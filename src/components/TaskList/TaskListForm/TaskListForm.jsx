import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import './TaskListForm.scss';

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
      <div className="sectionform__container">
        <textarea onChange={this.inputHandler} name="sectionName" value={this.state.sectionName} placeholder="Enter the name of your section here" className="section__input"></textarea>
        <div className="btn__container">
          <Button variant="contained" color="primary" onClick={this.addSection}>Create a section</Button>
          <button className="cancel__btn" onClick={() => this.props.cancelAdd()}><FontAwesomeIcon icon={faTimes} /></button>
        </div>
      </div>
    )
  }
}

export default TaskListForm;