import React, {Component} from 'react';
import ModalDeleteItem from '../modal-delete-item/';

export default class PostListItem extends Component {
  state = {
    edit: false,
    showModal: false
  };
  onEdit = () => {
    this.setState(({edit}) => ({
      edit: !edit
    }))    
  }
  handleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }));
  }
  

  render() {
    
    const {label, onDelete, editItem, onToggle, important, like} = this.props;
    const {edit, showModal} = this.state;
    let classNames = 'app-list-item d-flex justify-content-between';
    if (important) classNames += ' important';
    if (like) classNames += ' like';
    const date = new Date();
    let msgBlock, btn, text = '';

    const editPost = () => {
      this.onEdit();
      editItem(text);
    }
    const onValue = (event) => {
      text = event.target.value;
    }
    if (edit) {
      msgBlock = <input 
                  defaultValue={label}
                  onChange={onValue}>
                 </input>;
      btn = <button
              type='button' 
              className='btn btn-link btn-edit'
              onClick={editPost}>
                Сохранить
            </button> 
    } else {
      msgBlock = <span 
                  className='app-list-item-label'
                  onClick={() => onToggle('like')}>
                    {label}
                 </span>;
      btn = <button
              type='button' 
              className='btn btn-link btn-edit'
              onClick={this.onEdit}>
                Редактировать
            </button> 
    }

    return (
      
      <div className={classNames}> 
        {msgBlock}
        <div className='d-flex justify-content-center align-items-center'>
        <p className='date-text text-secondary'>{date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}</p>
        {btn}
        <button 
          type='button' 
          className='btn-star btn-sm'
          onClick={() => onToggle('important')}>
          <i className='fa fa-star'></i>
        </button>
        
        <button 
          type='button' 
          className='btn-trash btn-sm'
          onClick={this.handleModal}>
          <i className='fa fa-trash-o'></i>
        </button>
        <i className='fa fa-heart'></i>
        </div>
        {showModal && <ModalDeleteItem  
                      handleModal={() => this.handleModal()}
                      onDelete={() => onDelete()}/> }
      </div>
    )
  }
}