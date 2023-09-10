import Icon from "../Icon";
import * as Styled from "./Rating.style";

const Rating = ({ rating }) => (
  <div>
    {[...Array(5)].map((_, index) => {
      const $isActive = index + 1 <= rating;
      return (
        <Styled.Icon key={index + 1} $isActive={$isActive}>
          <Icon icon="star" />
        </Styled.Icon>
      );
    })}
  </div>
);

export default Rating;
