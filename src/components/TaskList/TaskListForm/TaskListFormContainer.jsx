import React from 'react';
import {connect} from 'react-redux';
import {addSection} from '../../../redux/actions/taskListActions';
import TaskListForm from './TaskListForm';

const TaskListFormContainer = (props) => {
  return (
    <TaskListForm addSection={props.addSection} goToDefault={props.goToDefault} cancelAdd={props.cancelAdd}/>
  )
}

export default connect(null, {addSection})(TaskListFormContainer);