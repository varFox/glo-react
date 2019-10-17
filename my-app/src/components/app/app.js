import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import styled from 'styled-components';

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

export default class App extends Component {
  state = {
    data: [
      5,
      [4],
      {label: 'Going to learn React', important: true, id: 'ergdffv'},
      {label: 'That is so good', important: false, id: 'asd'},
      {label: 'I need a break...', important: false, id: 'wewqe'}
    ]
  };

  deleteItem = (id) => {
    this.setState(({data}) => { 
      const index = data.findIndex(elem => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr
      }
    }); 
  }

  addItem = (body) => {
    
  }

  editItem = (id, text) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      if (data[index].label !== text && text !== '') {
        const newLabel = data[index];
        newLabel.label = text;
        const newArr = [...data.slice(0, index), newLabel, ...data.slice(index + 1)];
        return {
          data: newArr
        }
      }
    });
    
  }

  render() {
    return (
      <AppBlock>
        <AppHeader />
        <div className='search-panel d-flex'>
          <SearchPanel/>
          <PostStatusFilter/>
        </div>
        <PostList 
          posts={this.state.data}
          onDelete={this.deleteItem}
          editItem={this.editItem}
        />
        <PostAddForm
          onAdd={this.addItem}/>
      </AppBlock>
    )
  }

}
