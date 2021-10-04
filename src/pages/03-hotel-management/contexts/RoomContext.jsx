import { useContext, useEffect, createContext, useState } from 'react';
import { storedRooms } from '../room';

const RoomContext = createContext({});

const RoomProvider = (props) => {
  const [rooms, setRooms] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);

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
      }}>
      {props.children}
    </RoomContext.Provider>
  );
};

const useRoom = () => useContext(RoomContext);

export { RoomProvider, useRoom };
