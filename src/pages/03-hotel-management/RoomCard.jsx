import React from 'react';
import styled from 'styled-components';
import { useRoom } from './contexts/RoomContext';
import { facilityType, roomTypes } from './room';

function RoomCard({ room }) {
  const { discount, serviceFee } = useRoom();

  return (
    <RoomCardWrap>
      <div
        className="card-header"
        style={{ backgroundImage: `url(${room.roomPicUrl})` }}>
        <div className="room-type">{roomTypes[room.type]}</div>
      </div>
      <div className="card-content">
        <h3 className="room-name">{roomTypes[room.type]}</h3>
        <p className="room-facility">
          {Object.entries(room.facility).map(([f, v]) =>
            v ? <span key={f}>&#10003;{facilityType[f]}</span> : null
          )}
        </p>
        <p className="discount">
          折扣： {discount} * {room.discount} = {discount * room.discount}
        </p>
        <div className="room-price">
          <p className="original-price">TWD ${room.price}</p>
          <p className="final-price">
            ${room.price * discount * room.discount + serviceFee}
          </p>
        </div>
      </div>
    </RoomCardWrap>
  );
}

export default RoomCard;

const RoomCardWrap = styled.div`
  width: 30%;
  min-width: 20rem;
  margin: 1.5rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);

  .card-header {
    position: relative;
    width: 100%;
    height: 20rem;
    background-color: #eee;
    background-position: center;
    background-size: cover;
  }

  .room-type {
    position: absolute;
    left: 0;
    bottom: 2rem;
    background-color: rgba(256, 256, 256, 0.75);
    padding: 0.5rem 2rem;
    font-size: 1.5rem;
    color: #000;
  }

  .card-content {
    padding: 1rem;
  }

  .room-name {
    font-size: 1.8rem;
    margin: 0.5rem 0;
  }

  .room-facility {
    & > span {
      margin-right: 0.5rem;
    }
  }

  .discount {
    font-size: 1.5rem;
    margin: 0.8rem 0;
  }

  .room-price {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }

  .original-price {
    font-size: 2rem;
    text-decoration-line: line-through;
  }

  .final-price {
    font-size: 2rem;
    color: #f05858;
  }
`;
