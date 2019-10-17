import React, {Component} from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .4);
  justify-content: center;
  align-items: center;
  .popup {
    width: 400px;
    height: 150px;
    background-color: #fff;
    p {
      text-align: center;
      margin: 20px;
    }
    .blockBtn {
      display: flex;
      justify-content: space-around;
    }
    button {
      width: 130px;
      background-color: #B0DEFC;
    }
    button.btnYes {
      background-color: #fcb0b0;
    }
  }
`

export default class ModalDeleteItem extends Component {
  
  render () {
    const {onDelete, handleModal} = this.props;
    return (
      <Modal className='modal'>
        <div className='popup'>
          <p>Вы точно хотите удалить этот пост?</p>
          <div className='blockBtn'>
            <button className='btnYes' onClick={onDelete}>да</button>
            <button onClick={handleModal}>нет</button>
          </div>
          
        </div>
      </Modal>
    )
  }
}