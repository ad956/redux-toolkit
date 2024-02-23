import { useSelector } from "react-redux";
import { login } from "../features/userSlice";

function NavBar() {
  const isLoggedIn = useSelector((state) => state.user.isAuthenticated);

  return (
    <nav>
      {isLoggedIn ? (
        <p>Demonstatring Authentication using react-redux toolkit !!!</p>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </nav>
  );
}

export default NavBar;
