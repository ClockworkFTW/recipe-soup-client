import Icon from "../Icon";
import * as Styled from "./Button.style";

export const ButtonPrimary = ({ type = "button", label, icon, onClick }) => {
  return (
    <Styled.ButtonPrimary type={type} onClick={onClick}>
      {icon && <Icon icon={icon} />}
      {label && <Styled.Label $hasIcon={icon}>{label}</Styled.Label>}
    </Styled.ButtonPrimary>
  );
};

export const ButtonSecondary = ({ type = "button", label, icon, onClick }) => {
  return (
    <Styled.ButtonSecondary type={type} onClick={onClick}>
      {icon && <Icon icon={icon} />}
      {label && <Styled.Label $hasIcon={icon}>{label}</Styled.Label>}
    </Styled.ButtonSecondary>
  );
};

export const ButtonTertiary = ({ type = "button", label, icon, onClick }) => {
  return (
    <Styled.ButtonTertiary type={type} onClick={onClick}>
      {icon && <Icon icon={icon} />}
      {label && <Styled.Label $hasIcon={icon}>{label}</Styled.Label>}
    </Styled.ButtonTertiary>
  );
};
