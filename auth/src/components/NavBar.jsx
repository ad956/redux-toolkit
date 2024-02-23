import React from "react";
import { useSelector } from "react-redux";
import { login } from "../features/userSlice";

function NavBar() {
  const isLoggedIn = useSelector((state) => state.user.isAuthenticated);

  return (
    <nav>
      {isLoggedIn ? (
        <p>Welcome!</p>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </nav>
  );
}
