import React, { useState } from "react";
import { UserContext } from "./UserContext";

const user1 = {
  id: 1234,
  name: "Wandir Pereira",
  email: "wpf@gmail.com",
};

const user2 = {
  id: 14321,
  name: "Waldir Pereira",
  email: "wldpf@gmail.com",
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
