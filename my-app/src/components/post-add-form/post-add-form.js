import React from 'react';
import { Button, Input } from 'reactstrap';
import styled from 'styled-components';

const BottomPanel = styled.div`
  margin-top: 20px;
  display: flex;
  input {
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
  }
`

const PostAddForm = ({onAdd}) => {

  return (
    <BottomPanel>
      <Input
        type='text'
        placeholder='О чём вы думаете сейчас'
        className='new-post-label'
      />
      <Button outline color="secondary"
        type='submit'
        onClick={() => onAdd('hi')}>
        Добавить</Button>
    </BottomPanel>
  )
}

export default PostAddForm