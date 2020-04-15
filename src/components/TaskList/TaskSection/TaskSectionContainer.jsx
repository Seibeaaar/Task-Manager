import React from 'react';
import {connect} from 'react-redux';
import TaskSection from './TaskSection';

const TaskSectionContainer = (props) => {
  return (
    <TaskSection heading={props.heading} id={props.id} index={props.index} tasks={props.tasks[props.index].tasks}/>
  )
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.sections
  }
}

export default connect(mapStateToProps, null)(TaskSectionContainer)