import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { ButtonPrimary } from "../../components/Button";
import { useUser } from "../../hooks/useAuth";
import * as Styled from "./Landing.style.js";

import landing1 from "../../assets/landing-1.png";
import landing2 from "../../assets/landing-2.png";
import landing3 from "../../assets/landing-3.png";
import landing4 from "../../assets/landing-4.png";
import landing5 from "../../assets/landing-5.png";

const images = [landing1, landing2, landing3, landing4, landing5];

function Landing() {
  const user = useUser();

  const navigate = useNavigate();

  function handleGetStartedClicked() {
    navigate("/register");
  }

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => {
        if (currentImage < images.length - 1) {
          return currentImage + 1;
        } else {
          return 0;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
      <Styled.Image src={images[currentImage]} />
    </Styled.Container>
  );
}

export default Landing;
