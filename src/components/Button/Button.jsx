import * as Styled from "./Button.style";

const Button = ({ label, onClick }) => {
  return <Styled.Button onClick={onClick}>{label}</Styled.Button>;
};

export default Button;
