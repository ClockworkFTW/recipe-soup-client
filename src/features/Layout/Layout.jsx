import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

import { ButtonPrimary, ButtonTertiary } from "../../components/Button";
import Icon from "../../components/Icon";
import { useUser } from "../../hooks/useAuth";
import { useLogoutUser } from "../../hooks/useLogoutUser";
import * as Styled from "./Layout.styles";

const Layout = () => {
  const user = useUser();
  const { logoutUser } = useLogoutUser();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const test = pathname === "/" || pathname === "/recipes";

  function handleProfileClicked() {
    navigate(`/profile/${user.sub}`);
  }

  function handleLoginClicked() {
    navigate("/login");
  }

  return (
    <Styled.Container>
      <Styled.Header>
        {user ? (
          <>
            <Styled.Logo>
              <Link to="/recipes">
                <Icon icon={test ? "pot-food" : "left"} /> Recipe Soup
              </Link>
            </Styled.Logo>
            <Styled.Navigation>
              <ButtonTertiary
                label={user.username}
                icon="hat-chef"
                onClick={handleProfileClicked}
              />
              <ButtonPrimary
                label="Logout"
                icon="right-from-bracket"
                onClick={logoutUser}
              />
            </Styled.Navigation>
          </>
        ) : (
          <>
            <Styled.Logo>
              <Link to="/">
                <Icon icon={test ? "pot-food" : "left"} /> Recipe Soup
              </Link>
            </Styled.Logo>
            <Styled.Navigation>
              <ButtonPrimary
                label="Login"
                icon="right-to-bracket"
                onClick={handleLoginClicked}
              />
            </Styled.Navigation>
          </>
        )}
      </Styled.Header>
      <Styled.Main>
        {user && !user.isVerified && <p>Please validate your email</p>}
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
