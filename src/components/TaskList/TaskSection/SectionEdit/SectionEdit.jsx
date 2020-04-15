import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes, faCheck} from '@fortawesome/free-solid-svg-icons';

class SectionEdit extends Component {
  state = {
    inputValue: this.props.defaultValue
  }
  inputHandler = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <>
        <textarea className="section__input" defaultValue={this.state.inputValue} onChange={this.inputHandler}></textarea>
        <button onClick={() => {
          debugger;
          this.props.editSection(this.props.id, this.state.inputValue);
          this.props.confirmEdit(false);
        }}><FontAwesomeIcon icon={faCheck} /></button>
        <button onClick={() => this.props.confirmEdit(false)}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </>
    )
  }
}

export default SectionEdit;