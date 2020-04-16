import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash, faPen} from '@fortawesome/free-solid-svg-icons';
import './TaskItem.scss';

const TaskItem = (props) => {
  return (
    <Card className="taskitem__container">
      <CardContent>
        <Typography variant="h5" component="h5">
          {props.title}
        </Typography>
        <div className="btn__container">
          <button><FontAwesomeIcon icon={faPen} /></button>
          <button><FontAwesomeIcon icon={faTrash} onClick={() => props.deleteTask(props.sectionId, props.index)}/></button>
        </div>
      </CardContent>
    </Card>
  )
}

export default TaskItem;