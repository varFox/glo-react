import React from 'react';

import PostListItem from '../post-list-item/';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const AppList = styled(ListGroup)`
  margin-top: 50px;
  li {
    padding: 20px 35px 10px 35px;
    margin-top: 10px;
  }
`

const PostList = ({posts, onDelete, editItem, onToggle}) => {
  const elements = posts.filter(name => typeof name == 'object').map((item => {
    const {id, ...itemProps} = item;
    if(id) {
      return (
        <ListGroupItem key={id}>
          <PostListItem 
            {...itemProps} 
            onDelete={() => onDelete(id)}
            editItem={(label) => editItem(id, label)}
            onToggle={(type) => onToggle(id, type)}/>
        </ListGroupItem>
      )
    }
    
  }));

  return (
    <AppList>
      {elements}
    </AppList>
  )
}
export default PostList;