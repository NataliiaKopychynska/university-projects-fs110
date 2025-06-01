import React from "react";
import { useUser } from "./userContext";

function ContextApp() {
  const { userName, isLoggedIn, logOut, logIn } = useUser();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Welcome, {userName}</p>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
}

export default ContextApp;
