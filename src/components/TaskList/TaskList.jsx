import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
import TaskSection from './TaskSection/TaskSection';
import TaskListFormContainer from './TaskListForm/TaskListFormContainer';
import Container from '@material-ui/core/Container';
import {withStyles} from '@material-ui/core/styles';
import './TaskList.scss';


class TaskList extends Component {
  state = {
    add: false
  }
  addSection = () => {
    this.setState({
      add: !this.state.add
    })
  }
  render() {
    const StyledContainer = withStyles({
      root: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: `${this.props.sections.length * 320}px`,
        height: '100vh'
      }
    })(Container);
    return (
      <>
        <header className="tasklist__header">
          <h5>{this.props.firstName + ' ' + this.props.lastName}</h5>
          <button className="logout__btn" onClick={() => {
            this.props.logOut();
          }}>
            <FontAwesomeIcon icon={faPowerOff} />
          </button>
        </header>
        <div></div>
        <StyledContainer maxWidth="xl" className="tasklist__content">
          {this.props.sections.map(item => <TaskSection heading={item.name} id={item.id}/>)}
          {this.state.add ? <TaskListFormContainer goToDefault={this.addSection}/> : <button onClick={this.addSection} className="add__btn">Add section</button>}
        </StyledContainer>
      </>
    )
  }
}

export default TaskList;