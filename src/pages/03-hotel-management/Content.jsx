import React from 'react';
import styled from 'styled-components';
import { useRoom } from './contexts/RoomContext';
import RoomCard from './RoomCard';

function Content() {
  const { rooms } = useRoom();

  return (
    <ContentContainer>
      <h2 className="header">房型一覽</h2>
      <div className="room-card-container">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </ContentContainer>
  );
}

export default Content;

const ContentContainer = styled.div`
  width: 100%;
  padding: 0 1.5rem;

  .room-card-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 2rem 0;
  }
`;
