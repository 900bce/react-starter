import { useContext, useEffect, createContext, useState } from 'react';
import { storedRooms } from '../room';

const RoomContext = createContext({});

const RoomProvider = (props) => {
  const [rooms, setRooms] = useState([]);
  const [discount, setDiscount] = useState(0.9);
  const [serviceFee, setServiceFee] = useState(150);

  const removeRoom = (roomId) => {
    setRooms((rooms) => rooms.filter((room) => room.id !== roomId));
  };

  useEffect(() => {
    setRooms(storedRooms);
  }, []);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        discount,
        serviceFee,
        setRooms,
        setDiscount,
        setServiceFee,
        removeRoom,
      }}>
      {props.children}
    </RoomContext.Provider>
  );
};

const useRoom = () => useContext(RoomContext);

export { RoomProvider, useRoom };
