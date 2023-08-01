import { Link, Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import { useLogoutUser } from "../../hooks/useLogoutUser";

import * as Styled from "./Layout.styles";

const Layout = () => {
  const auth = useAuth();

  const { logoutUser } = useLogoutUser();

  return (
    <Styled.Container>
      <Styled.Header>
        {auth ? (
          <>
            <nav>
              <Link to="/">Landing</Link>
              <Link to="/recipes">Recipes</Link>
            </nav>
            <nav>
              <Link to="/profile">{auth.username}</Link>
              <button onClick={logoutUser}>Logout</button>
            </nav>
          </>
        ) : (
          <>
            <nav>
              <Link to="/">Landing</Link>
            </nav>
            <nav>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </nav>
          </>
        )}
      </Styled.Header>
      <Styled.Main>
        <Outlet />
      </Styled.Main>
    </Styled.Container>
  );
};

export default Layout;
