import React from 'react';
import styled from 'styled-components';
import { useRoom } from './contexts/RoomContext';
import RoomEditList from './RoomEditList';

function Sidebar() {
  const { rooms, discount, setDiscount, serviceFee, setServiceFee } = useRoom();

  return (
    <SideBar>
      <h2 className="header">房間資訊</h2>
      <div className="discount">
        <label>總折扣</label>
        <br />
        <input
          type="number"
          value={discount}
          min="0"
          max="1"
          onChange={(e) => setDiscount(+e.target.value)}
          onBlur={(e) => {
            if (+e.target.value > 1) {
              setDiscount(1);
            }
          }}
        />
      </div>
      <div className="service-fee">
        <label>服務費</label>
        <br />
        <input
          type="number"
          value={serviceFee}
          onChange={(e) => setServiceFee(+e.target.value)}
        />
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

  .discount,
  .service-fee,
  .event {
    margin-top: 1rem;
    font-size: 1.4rem;

    & > input {
      padding: 3px 5px;
      font-size: 1.4rem;
      width: 60%;
    }
  }

  .sidebar-content-title {
    padding: 1rem 0;
    border-bottom: 1px solid rgb(220, 220, 220);
    margin: 1rem 0;
    font-size: 1.6rem;
    font-weight: 600;
  }
`;

export default Sidebar;
