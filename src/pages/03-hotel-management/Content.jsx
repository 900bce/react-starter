import React from 'react';
import styled from 'styled-components';
import { useRoom } from './contexts/RoomContext';
import { facilityType } from './room';

function Content() {
  const { rooms } = useRoom();

  return (
    <ContentContainer>
      <h2 className="header">房型一覽</h2>
      <div>
        {rooms.map((room) => (
          <div key={room.id}>
            <p>房型：{room.type}</p>
            <p>折扣：{room.discount}</p>
            <p>房價：{room.price}</p>
            <p>圖片：{room.roomPicUrl}</p>
            <div>
              {Object.entries(room.facility).map(([f, v]) =>
                v ? <span key={f}>&#10003;{facilityType[f]}</span> : null
              )}
            </div>
            <hr />
          </div>
        ))}
      </div>
    </ContentContainer>
  );
}

export default Content;

const ContentContainer = styled.div`
  width: 100%;
  padding: 0 1.5rem;
`;
