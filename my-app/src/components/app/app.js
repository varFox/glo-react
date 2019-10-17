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
const SearchPanelDiv = styled.div`
  margin: 1rem 0;
  display: flex;
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
  }
  maxId = 4;

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
    const newItem = {
      label: body,
      important: false,
      id: (new Date()*6).toString(16)
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      console.log(newArr);
      return {
        data: newArr
      }
    })
    
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
        <SearchPanelDiv>
          <SearchPanel/>
          <PostStatusFilter/>
        </SearchPanelDiv>
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
