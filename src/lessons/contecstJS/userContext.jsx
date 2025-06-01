import { createContext, use, useState } from "react";

export const UserContext = createContext();

export const useUser = () => use(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null);

  const logIn = () => {
    setIsLoggedIn(true);
    setUserName("Mango");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUserName(null);
  };
  return (
    <UserContext value={{ isLoggedIn, userName, logIn, logOut }}>
      {children}
    </UserContext>
  );
};
