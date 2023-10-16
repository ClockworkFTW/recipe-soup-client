import { useLocation, useNavigate } from "react-router-dom";

import Icon from "../../../../components/Icon";
import * as Styled from "./Logo.style";

const Logo = ({ user }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isOnMainPage = pathname === "/" || pathname === "/recipes";

  function handleLogoClicked() {
    if (user) {
      navigate("/recipes");
    } else {
      navigate("/");
    }
  }

  return (
    <Styled.Container onClick={handleLogoClicked}>
      {!isOnMainPage && <Icon icon="left" />}
      <Styled.Text $isOnMainPage={isOnMainPage}>RecipeSoup</Styled.Text>
    </Styled.Container>
  );
};

export default Logo;
