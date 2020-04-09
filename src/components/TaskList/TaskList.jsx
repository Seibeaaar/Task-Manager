import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
import TaskSection from './TaskSection/TaskSection';
import TaskListFormContainer from './TaskListForm/TaskListFormContainer';


class TaskList extends Component {
  state = {
    add: false
  }
  addSection = (e) => {
    e.preventDefault();
    this.setState({
      add: !this.state.add
    })
  }
  render() {
    return (
      <>
        <header>
          <button onClick={() => {
            this.props.logOut();
          }}>
            <FontAwesomeIcon icon={faPowerOff} />
          </button>
        </header>
        {this.props.sections.map(item => <TaskSection heading={item.name}/>)}
        {this.state.add ? <TaskListFormContainer goToDefault={this.addSection}/> : <button onClick={this.addSection}>Add section</button>}
      </>
    )
  }
}

export default TaskList;