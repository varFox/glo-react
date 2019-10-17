import React from 'react';

const PostAddForm = ({onAdd}) => {
  return (
    <div className='bottom-panel d-flex'>
      <input
        type='text'
        placeholder='О чём вы думаете сейчас'
        className='form-control new-post-label'
      />
      <button
        type='submit'
        className='btn btn-outline-secondary'
        onClick={() => onAdd('hi')}>
        Добавить</button>
    </div>
  )
}

export default PostAddForm