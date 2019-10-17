import React from 'react';

import PostListItem from '../post-list-item/';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PostList = ({posts, onDelete, editItem}) => {
  const elements = posts.filter(name => typeof name == 'object').map((item => {
    const {id, ...itemProps} = item;
    if(id) {
      return (
        <li key={id} className='list-group-item'>
          <PostListItem 
            {...itemProps} 
            onDelete={() => onDelete(id)}
            editItem={(label) => editItem(id, label)}/>
        </li>
      )
    }
    
  }));

  return (
    <ListGroup className='app-list'>
      {elements}
    </ListGroup>
  )
}
export default PostList;