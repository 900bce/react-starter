import React from 'react';
import { useRoom } from './contexts/RoomContext';
import RoomEditCard from './RoomEditCard';

function RoomEditList() {
  const { rooms } = useRoom();

  const roomList = [...rooms];

  return (
    <div>
      {roomList.map((room, index) => (
        <RoomEditCard key={room.id} room={room} index={index} />
      ))}
    </div>
  );
}

export default RoomEditList;
