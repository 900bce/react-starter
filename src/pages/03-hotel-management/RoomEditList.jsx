import React from 'react';
import { useRoom } from './contexts/RoomContext';
import RoomEditCard from './RoomEditCard';
import styled from 'styled-components';

function RoomEditList() {
  const { rooms, setRooms } = useRoom();

  const roomList = [...rooms];

  const addRoom = () => {
    const uuid = uuidv4();

    setRooms([
      ...rooms,
      {
        id: uuid,
        type: 0,
        discount: 1,
        price: 1,
        roomPicUrl: '',
        facility: {},
      },
    ]);
  };

  const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  };

  return (
    <div>
      {roomList.map((room, index) => (
        <RoomEditCard key={room.id} room={room} index={index} />
      ))}
      <AddRoomBtn>
        <button onClick={addRoom}>+</button>
      </AddRoomBtn>
    </div>
  );
}

export default RoomEditList;

const AddRoomBtn = styled.div`
  text-align: center;

  button {
    color: #333;
    font-size: 2rem;
    background: transparent;
    border: none;
    border-radius: 50%;
    border: 1px solid #333;
    width: 2.5rem;
    height: 2.5rem;
  }
`;
