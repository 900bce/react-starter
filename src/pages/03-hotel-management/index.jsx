import React from 'react'
import styled from 'styled-components';
import Sidebar from './Sidebar';

const Container = styled.div`
  display: flex;
  margin: 0 2rem;
  color: #333;
`;

const Content = styled.div`
  width: 100%;
  padding: 0 1.5rem;
`;

const Header = styled.h2`
  font-size: 3rem;
  padding: 2rem 0;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

function HotelManagement() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Header>房型一覽</Header>
      </Content>
    </Container>
  )
}

export default HotelManagement
