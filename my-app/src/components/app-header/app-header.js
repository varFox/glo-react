import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px; 
    color: ${props => props.colored ? 'red' : 'black'}
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }

`

const AppHeader = ({liked, allPosts}) => {
  const text = () => {
    const n = allPosts % 100, m = n % 10;
    return (n > 10 && n < 20) ? 'записей' : (m > 1 && m < 5) ? 'записи' : (m == 1) ? 'запись' : 'записей';
  }
  return (
    <Header>
      <h1>Lyubov Kolegova</h1>
      <h2>{allPosts} {text()}, из них понравилось {liked}</h2>
    </Header>
  )
}

export default AppHeader;