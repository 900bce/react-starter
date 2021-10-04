import React from 'react';
import styled from 'styled-components';
import { useRoom } from './contexts/RoomContext';
import RoomEditList from './RoomEditList';

function Sidebar() {
  const { rooms, discount, setDiscount, serviceFee, setServiceFee } = useRoom();

  return (
    <SideBar>
      <h2 className="header">房間資訊</h2>
      <div>
        <label>總折數</label>
        <br />
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </div>
      <div>
        <label>服務費</label>
        <br />
        <input
          type="number"
          value={serviceFee}
          onChange={(e) => setServiceFee(e.target.value)}
        />
      </div>
      <div>
        <label>活動</label>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-content-title">
          房型總數 (共{rooms.length}間)
        </div>
        <RoomEditList />
      </div>
    </SideBar>
  );
}

const SideBar = styled.div`
  width: 33rem;
  height: 100vh;
  padding: 0 1.5rem;
  background-color: #fafafa;

  .sidebar-content-title {
    padding: 1rem 0;
    border-bottom: 1px solid rgb(220, 220, 220);
  }
`;

export default Sidebar;
