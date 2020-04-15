import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
import TaskSectionContainer from './TaskSection/TaskSectionContainer';
import TaskListFormContainer from './TaskListForm/TaskListFormContainer';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
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
        width: this.props.sections.length < 5 ? '100%' : `${this.props.sections.length * 340}px`,
        height: '100vh',
        backgroundImage: 'url("https://embedwistia-a.akamaihd.net/deliveries/d5ae8190f0aa7dfbe0b01f336f29d44094b967b5.webp?image_crop_resized=1280x720")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }
    })(Container);
    return (
      <>
        <header className="tasklist__header">
          <div className="tasklist__personal">
            <Avatar>{this.props.firstName[0].toUpperCase() + this.props.lastName[0].toUpperCase()}</Avatar>
            <h5 className="personal__name">{this.props.firstName + ' ' + this.props.lastName}</h5>
          </div>
          <button className="logout__btn" onClick={() => {
            this.props.logOut();
          }}>
            <FontAwesomeIcon icon={faPowerOff} />
          </button>
        </header>
        <div className="tasklist__background">
          <StyledContainer maxWidth="xl" className="tasklist__content">
            {this.props.sections.map((item, index) => <TaskSectionContainer heading={item.name} id={item.id} index={index}/>)}
            {this.state.add ? <TaskListFormContainer goToDefault={this.addSection} cancelAdd={this.addSection}/> : <button onClick={this.addSection} className="add__btn">Add section</button>}
          </StyledContainer>
        </div>
      </>
    )
  }
}

export default TaskList;