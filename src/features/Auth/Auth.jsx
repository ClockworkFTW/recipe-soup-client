import { Navigate, Outlet } from "react-router-dom";

import { useToken } from "../../hooks/useAuth";
import * as Styled from "./Auth.styles";

const Auth = () => {
  const { token } = useToken();

  return token ? (
    <Navigate to="/recipes" />
  ) : (
    <Styled.Container>
      <Outlet />
    </Styled.Container>
  );
};

export default Auth;
