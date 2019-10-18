import React, {Component} from 'react';
import { Input } from 'reactstrap';
import styled from 'styled-components';

const SearchInput = styled(Input)`
  width: auto;
  flex-grow: 1;
  margin-right: 3px;
`

export default class SearchPanel extends Component {

  state = {
    term: ''
  }

  onUpdateSearch = (event) => {
    const term = event.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term);
  }
  render() {
    return (
      <SearchInput
        type='text'
        placeholder='Поиск по записям'
        onChange={this.onUpdateSearch}
      />
    )
  }

}
