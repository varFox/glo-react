import React, {Component} from 'react';
import { Button, Input } from 'reactstrap';
import styled from 'styled-components';

const BottomPanel = styled.form`
  margin-top: 20px;
  display: flex;
  input {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
  }
`

export default class PostAddForm extends Component {
  state = {
    text: ''
  }
  
  onValueChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === '') return ;
    this.props.onAdd(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <BottomPanel
        onSubmit={this.onSubmit}>
        <Input
          type='text'
          placeholder='О чём вы думаете сейчас'
          className='new-post-label'
          onChange={this.onValueChange}
          value={this.state.text}
        />
        <Button outline color="secondary"
          type='submit'>
          Добавить</Button>
      </BottomPanel>
    )
  }
}

