import React from 'react';

import PostListItem from '../post-list-item/';

const PostList = ({posts}) => {

  const elements = posts.filter(name => typeof name == 'object').map((item => {
    const {id, ...itemProps} = item;
    if(id) {
      return (
        <li key={id} className='list-group-item'>
          <PostListItem {...itemProps} />
        </li>
      )
    }
    
  }));

  return (
    <ul className='app-list list-group'>
      {elements}
    </ul>
  )
}
export default PostList;