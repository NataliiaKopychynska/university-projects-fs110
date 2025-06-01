import React from "react";
import ContextApp from "./ContextApp";
import { UserProvider } from "./userContext";
// import { UserProvider } from "./contecstJS/userContext";

const initialUserValue = {
  username: "Mango",
  isLoggedIn: true,
};

function Context() {
  return (
    <>
      <UserProvider value={initialUserValue}>
        <ContextApp />
      </UserProvider>
    </>
  );
}

export default Context;
