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
      {label: 'Going to learn React', important: false, like: false, id: 'ergdffv'},
      {label: 'That is so good', important: false, like: false, id: 'asd'},
      {label: 'I need a break...', important: false, like: false, id: 'wewqe'}
    ],
    term: '',
    filter: 'all'
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
  onToggle = (id, type) => {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      const old = data[index];  
      const newItem = {...old, [type]: !old[type]};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  searchPost = (items, term) => {
    if (term.length === 0) {
      return items
    }
    return items.filter(item => {
      return item.label.toUpperCase().indexOf(term.toUpperCase()) > -1
    });
  }

  filterPost = (items, filter) => {
    if (filter === 'like') {
      return items.filter(item => item.like)
    } else {
      return items
    }
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }

  onFilterSelect = (filter) => {
    this.setState({filter});
  }

  render() {
    const {data, term, filter} = this.state;
    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;
    const visiblePosts = this.filterPost(this.searchPost(data, term), filter);
    return (
      <AppBlock>
        <AppHeader 
          liked={liked}
          allPosts={allPosts}/>
        <SearchPanelDiv>
          <SearchPanel
            onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        </SearchPanelDiv>
        <PostList 
          posts={visiblePosts}
          onDelete={this.deleteItem}
          editItem={this.editItem}
          onToggle={this.onToggle}
        />
        <PostAddForm
          onAdd={this.addItem}/>
      </AppBlock>
    )
  }

}
