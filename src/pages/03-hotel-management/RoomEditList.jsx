import React from 'react';
import { useRoom } from './contexts/RoomContext';
import RoomEditCard from './RoomEditCard';

function RoomEditList() {
  const { rooms } = useRoom();

  const roomList = [...rooms];

  return roomList.map((room) => <RoomEditCard key={room.id} room={room} />);
}

export default RoomEditList;
