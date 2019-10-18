import React, {Component} from 'react';
import { Button } from 'reactstrap';

export default class PostStatusFilter extends Component {
  buttons = [
    {name: 'all', label: 'Все'},
    {name: 'like', label: 'Понравилось'},

  ]
  render() {
    const buttons = this.buttons.map(({name, label}) => {
      const {filter, onFilterSelect} = this.props;
      const active = filter === name;
      const clazz = active ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button 
          key={name} 
          className={`btn ${clazz}`}
          onClick={() => onFilterSelect(name)}>{label}
        </button>
      )
    });
    return (
      <div className='btn-group'>
        {buttons}
      </div>
    )
  }

}

