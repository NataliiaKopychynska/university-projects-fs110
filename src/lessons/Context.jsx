import React from "react";
import ContextApp from "../components/ContextApp";
import { UserContext } from "./contecstJS/userContext";

const initialUserValue = {
  username: "Mango",
  isLoggedIn: true,
};

function Context() {
  return (
    <>
      <UserContext value={initialUserValue}>
        <ContextApp />
      </UserContext>
    </>
  );
}

export default Context;
