import * as Styled from "./Button.style";

const Button = ({ type = "button", label, onClick }) => {
  return (
    <Styled.Button type={type} onClick={onClick}>
      {label}
    </Styled.Button>
  );
};

export default Button;
