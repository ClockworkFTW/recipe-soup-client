import { useEffect, useRef, useState } from "react";

import * as Styled from "./ImageFader.style.js";

import landing1 from "../../../assets/landing-1.png";
import landing2 from "../../../assets/landing-2.png";
import landing3 from "../../../assets/landing-3.png";
import landing4 from "../../../assets/landing-4.png";
import landing5 from "../../../assets/landing-5.png";

const images = [landing1, landing2, landing3, landing4, landing5];

function ImageFader() {
  const previousImage = useRef(0);

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

  useEffect(() => {
    previousImage.current = currentImage;
  }, [currentImage]);

  return (
    <Styled.Container>
      <Styled.ImagePrevious
        key={currentImage}
        src={images[previousImage.current]}
      />
      <Styled.ImageCurrent src={images[currentImage]} />
    </Styled.Container>
  );
}

export default ImageFader;
