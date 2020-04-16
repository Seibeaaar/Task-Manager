import React from 'react';
import {connect} from 'react-redux';
import {deleteTask, editTask} from '../../../../redux/actions/taskListActions';
import TaskItem from './TaskItem';

const TaskItemContainer = (props) => {
  return (
    <TaskItem deleteTask={props.deleteTask} index={props.index} editTask={props.editTask} title={props.title} id={props.id} sectionId={props.sectionId}/>
  )
}

export default connect(null, {deleteTask, editTask})(TaskItemContainer);

