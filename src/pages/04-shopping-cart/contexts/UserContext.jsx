import {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

const UserContext = createContext({});

const UserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  const values = useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser, setCurrentUser]
  );

  return (
    <UserContext.Provider value={values}>{props.children}</UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within an UserProvider');
  }

  return context;
};

export { UserContext, UserProvider, useUser };
