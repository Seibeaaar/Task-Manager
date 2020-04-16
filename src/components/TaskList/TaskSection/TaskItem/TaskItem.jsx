import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TaskEditContainer from './TaskEdit/TaskEditContainer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons';
import './TaskItem.scss';

class TaskItem extends Component {
  state = {
    editMode: false
  }
  toggleEditMode = (value) => {
    this.setState({
      editMode: value
    })
  }
  render() {
    return (
      <>
      {this.state.editMode ? <TaskEditContainer taskIndex={this.props.index} sectionId={this.props.sectionId} toggleEdit={this.toggleEditMode} defaultValue={this.props.title}/> : <Card className="taskitem__container">
        <CardContent>
          <Typography variant="h5" component="h5">
            {this.props.title}
          </Typography>
          <div className="btn__container">
            <button><FontAwesomeIcon icon={faPen} onClick={() => this.toggleEditMode(true)}/></button>
            <button><FontAwesomeIcon icon={faTrash} onClick={() => this.props.deleteTask(this.props.sectionId, this.props.index)} /></button>
          </div>
        </CardContent>
      </Card>}
      </>
    )
  }
}

export default TaskItem;