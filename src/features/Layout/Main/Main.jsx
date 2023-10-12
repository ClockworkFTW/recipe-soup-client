import { Outlet, useLocation } from "react-router-dom";

import { useUser } from "../../../hooks/useAuth";
import * as Styled from "./Main.style";

const Main = () => {
  const user = useUser();

  const { pathname } = useLocation();

  const isOnAuthPage =
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/forgot-password" ||
    pathname === "/reset-password";

  return (
    <Styled.Wrapper>
      <Styled.Container $isOnAuthPage={isOnAuthPage}>
        {user && !user.isVerified && <p>Please validate your email</p>}
        <Outlet />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default Main;
