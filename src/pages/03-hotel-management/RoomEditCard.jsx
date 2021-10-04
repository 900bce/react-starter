import React from 'react';
import { useState } from 'react/cjs/react.development';
import { useRoom } from './contexts/RoomContext';
import { roomTypes } from './room';

function RoomEditCard({ room }) {
  const { rooms, setRooms } = useRoom();
  const [currentRoom, setCurrentRoom] = useState(room);

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
    <div>
      <div>
        <label>房型</label>
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
      <div>
        <label>折扣</label>
        <input
          type="number"
          value={currentRoom.discount}
          max={10}
          onChange={(e) => onRoomDiscountChange(e.target.value)}
          onBlur={(e) => {
            if (e.target.value === '0' || +e.target.value > 10) {
              onRoomDiscountChange(10);
            }
          }}
        />
      </div>
      <div>
        <label>房價</label>
        <input
          type="number"
          value={currentRoom.price}
          onChange={(e) => onRoomPriceChange(e.target.value)}
        />
      </div>
      <div>
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
      <div>
        <label>圖片網址</label>
        <input
          type="text"
          value={currentRoom.roomPicUrl}
          onChange={(e) => onRoomPicChange(e.target.value)}
        />
      </div>
      <button onClick={updateRoom}>更新</button>
    </div>
  );
}

export default RoomEditCard;
