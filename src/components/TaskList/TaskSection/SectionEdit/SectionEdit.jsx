import React, {Component} from 'react';

class SectionEdit extends Component {
  state = {
    inputValue: ''
  }
  inputHandler = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  render() {
    return (
      <>
        <textarea className="section__input" defaultValue={this.props.defaultValue} onChange={this.inputHandler}></textarea>
        <button onClick={() => {
          debugger;
          this.props.editSection(this.props.id, this.state.inputValue);
          this.props.confirmEdit(false);
        }}>Confirm changes</button>
      </>
    )
  }
}

export default SectionEdit;