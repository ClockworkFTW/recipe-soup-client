import { Outlet, useNavigate } from "react-router-dom";

import Logo from "./Logo";
import { ButtonPrimary, ButtonTertiary } from "../../components/Button";
import { useUser } from "../../hooks/useAuth";
import { useLogoutUser } from "../../hooks/useLogoutUser";
import * as Styled from "./Layout.styles";

const Layout = () => {
  const user = useUser();
  const { logoutUser } = useLogoutUser();

  const navigate = useNavigate();

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
            <Logo user={user} />
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
            <Logo user={user} />
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
