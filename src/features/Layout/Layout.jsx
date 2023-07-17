import { Link, Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useLogoutUser } from "../../hooks/useLogoutUser";

const Layout = () => {
  const auth = useAuth();

  const { logoutUser } = useLogoutUser();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Logo</Link>
          </li>
          {auth ? (
            <>
              <li>
                <Link to="/recipes">Recipes</Link>
              </li>
              <li>
                <Link to="/profile">{auth.username}</Link>
              </li>
              <button onClick={logoutUser}>Logout</button>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
