import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import * as Styled from "./Auth.styles";

const Auth = () => {
  const auth = useAuth();

  return auth ? (
    <Navigate to="/recipes" />
  ) : (
    <Styled.Container>
      <Outlet />
    </Styled.Container>
  );
};

export default Auth;
