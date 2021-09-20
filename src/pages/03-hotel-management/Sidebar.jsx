import React from 'react'
import styled from 'styled-components';
import RoomEditor from './RoomEditor';
import Input from './Input';

const SideBar = styled.div`
  width: 33rem;
  height: 100vh;
  padding: 0 1.5rem;
  background-color: #fafafa;
`;

const Header = styled.h2`
  font-size: 3rem;
  padding: 2rem 0;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const inputValue = 8;

function Sidebar() {
  return (
    <SideBar>
      <Header>房間資訊</Header>
      <Input labelText="總折數" value={inputValue} />
      <p>{inputValue}</p>
      <Input labelText="服務費" value={inputValue} />
      <div>
        <label>活動</label>
      </div>
      <div className="SidebarContent">
        <div className="SidebarContentTitle">房型總數 (共8間)</div>
        <RoomEditor />
      </div>
    </SideBar>
  )
}

export default Sidebar
