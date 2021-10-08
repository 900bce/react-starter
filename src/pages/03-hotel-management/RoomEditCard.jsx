import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useRoom } from './contexts/RoomContext';
import { roomTypes } from './room';
import styled from 'styled-components';

function RoomEditCard({ room, index }) {
  const { rooms, setRooms } = useRoom();
  const [currentRoom, setCurrentRoom] = useState(room);
  const [isContentDisplay, setIsContentDisplay] = useState(false);

  const onRoomTypeChange = (value) =>
    setCurrentRoom({ ...currentRoom, type: +value });

  const onRoomDiscountChange = (value) =>
    setCurrentRoom({ ...currentRoom, discount: +value });

  const onRoomPriceChange = (value) => {
    setCurrentRoom({ ...currentRoom, price: +value });
  };

  const onRoomPicChange = (value) => {
    setCurrentRoom({ ...currentRoom, roomPicUrl: value });
  };

  const onFacilityChange = (value) => {
    setCurrentRoom({
      ...currentRoom,
      facility: {
        ...currentRoom.facility,
        [value]: currentRoom.facility[value]
          ? !currentRoom.facility[value]
          : true,
      },
    });
  };

  const updateRoom = () => {
    const roomId = room.id;
    const tempRooms = [...rooms];
    tempRooms[rooms.findIndex((room) => room.id === roomId)] = currentRoom;
    setRooms(tempRooms);
  };

  return (
    <EditCard>
      <div
        className="card-header"
        onClick={() => setIsContentDisplay(!isContentDisplay)}>
        {`${index + 1} `}
        {roomTypes[room.type]}
      </div>
      {isContentDisplay && (
        <div className="card-content">
          <div className="room-type">
            <label>房型</label>
            <br />
            <select
              name="roomType"
              value={currentRoom.type}
              onChange={(e) => onRoomTypeChange(e.target.value)}>
              {roomTypes.map((type, index) => (
                <option value={index} key={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="room-discount">
            <label>折扣</label>
            <br />
            <input
              type="number"
              value={currentRoom.discount}
              min="0"
              max="1"
              onChange={(e) => onRoomDiscountChange(e.target.value)}
              onBlur={(e) => {
                if (+e.target.value > 1) {
                  onRoomDiscountChange(1);
                }
              }}
            />
          </div>
          <div className="room-price">
            <label>房價</label>
            <br />
            <input
              type="number"
              value={currentRoom.price}
              onChange={(e) => onRoomPriceChange(e.target.value)}
            />
          </div>
          <div className="room-facility">
            <label>房內設備</label>
            <br />
            <input
              type="checkbox"
              value="wifi"
              checked={currentRoom.facility.wifi}
              onChange={(e) => onFacilityChange(e.target.value)}
            />
            <span>wifi</span>
            <input
              type="checkbox"
              value="privateBath"
              checked={currentRoom.facility.privateBath}
              onChange={(e) => onFacilityChange(e.target.value)}
            />
            <span>獨立衛浴</span>
            <input
              type="checkbox"
              value="bathtub"
              checked={currentRoom.facility.bathtub}
              onChange={(e) => onFacilityChange(e.target.value)}
            />
            <span>浴缸</span>
            <input
              type="checkbox"
              value="breakfast"
              checked={currentRoom.facility.breakfast}
              onChange={(e) => onFacilityChange(e.target.value)}
            />
            <span>早餐</span>
            <input
              type="checkbox"
              value="tv"
              checked={currentRoom.facility.tv}
              onChange={(e) => onFacilityChange(e.target.value)}
            />
            <span>電視</span>
            <input
              type="checkbox"
              value="sofa"
              checked={currentRoom.facility.sofa}
              onChange={(e) => onFacilityChange(e.target.value)}
            />
            <span>沙發</span>
            <input
              type="checkbox"
              value="privatePool"
              checked={currentRoom.facility.privatePool}
              onChange={(e) => onFacilityChange(e.target.value)}
            />
            <span>獨立泳池</span>
          </div>
          <div className="room-pic">
            <label>圖片網址</label>
            <br />
            <input
              type="text"
              value={currentRoom.roomPicUrl}
              onChange={(e) => onRoomPicChange(e.target.value)}
            />
          </div>
          <button className="update-btn" onClick={updateRoom}>
            更新
          </button>
        </div>
      )}
    </EditCard>
  );
}

export default RoomEditCard;

const EditCard = styled.div`
  margin-bottom: 1rem;
  .card-header {
    width: 100%;
    padding: 0.5rem 0.8rem;
    font-size: 1.4rem;
    border: 1px solid rgba(128, 128, 128, 0.5);
    border-left: 3px solid rgba(128, 128, 128, 0.5);
    cursor: pointer;
  }

  .card-content {
    padding: 1rem;
    margin-bottom: 3rem;
    border-left: 3px solid rgba(128, 128, 128, 0.5);
    font-size: 1.4rem;
  }

  .room-type,
  .room-discount,
  .room-price,
  .room-facility,
  .room-pic {
    margin-bottom: 1rem;

    & > label {
      font-weight: 500;
    }

    & > select {
      min-width: 60%;
      padding: 3px 5px;
    }
  }

  .room-discount,
  .room-price {
    & > input {
      padding: 3px 5px;
      width: 60%;
    }
  }

  .room-facility {
    & > input {
      margin-left: 0.5rem;
    }
  }

  .room-pic {
    & input {
      width: 100%;
    }
  }
  .update-btn {
    margin-top: 5px;
    padding: 0 5px;
  }
`;
