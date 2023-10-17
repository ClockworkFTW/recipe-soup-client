import { Navigate, useNavigate } from "react-router-dom";

import ImageFade from "./ImageFader";
import { ButtonPrimary } from "../../components/Button";
import { useUser } from "../../hooks/useAuth";
import * as Styled from "./Landing.style.js";

function Landing() {
  const user = useUser();

  const navigate = useNavigate();

  function handleGetStartedClicked() {
    navigate("/register");
  }

  return user ? (
    <Navigate to="/recipes" replace={true} />
  ) : (
    <Styled.Container>
      <Styled.Content>
        <h2>Your Culinary Adventure Awaits!</h2>
        <p>
          Keep track of all your favorite recipes in a personal cookbook.
          Eliminate distractions that make recipe websites a pain to use. Enjoy
          cooking without technology getting in the way.
        </p>
        <ButtonPrimary label="Get Started" onClick={handleGetStartedClicked} />
      </Styled.Content>
      <ImageFade />
    </Styled.Container>
  );
}

export default Landing;
