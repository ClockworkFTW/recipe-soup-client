import { Link, Outlet } from "react-router-dom";

import Button from "../../components/Button";
import Icon from "../../components/Icon";
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
              <Styled.Logo>
                <Link to="/recipes">
                  <Icon icon="pot-food" /> Recipe Soup
                </Link>
              </Styled.Logo>
            </nav>
            <nav>
              <Link to={`/profile/${auth.sub}`}>{auth.username}</Link>
              <Button label="Logout" onClick={logoutUser} />
            </nav>
          </>
        ) : (
          <>
            <nav>
              <Styled.Logo>
                <Link to="/">
                  <Icon icon="pot-food" /> Recipe Soup
                </Link>
              </Styled.Logo>
            </nav>
            <nav>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </nav>
          </>
        )}
      </Styled.Header>
      <Styled.Main>
        {auth && !auth.isVerified && <p>Please validate your email</p>}
        <Outlet />
      </Styled.Main>
      <Styled.Footer>
        <p>
          Created by <a href="https://github.com/clockworkftw">JNB</a>
        </p>
      </Styled.Footer>
    </Styled.Container>
  );
};

export default Layout;
