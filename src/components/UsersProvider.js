import React, { createContext, useContext, useEffect, useState } from "react";
export const UserContext = createContext();

const UsersProvider = ({ children }) => {

  const [allUsers, setAllUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(allUsers));
  }, [allUsers]);

  return (
    <UserContext.Provider value={{ allUsers, setAllUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => {
  return useContext(UserContext);
};

export default UsersProvider;
