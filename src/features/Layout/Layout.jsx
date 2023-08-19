import { Link, Outlet } from "react-router-dom";

import Button from "../../components/Button";
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
              <Button label="Logout" onClick={logoutUser} />
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
      <Styled.Footer>
        <p>Created by JNB</p>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Layout;
