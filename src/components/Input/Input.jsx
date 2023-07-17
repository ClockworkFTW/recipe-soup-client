import * as Styled from "./Input.styles";

const Input = ({ name, label, register, errors, type }) => (
  <div>
    <Styled.Label htmlFor={name}>{label}</Styled.Label>
    <Styled.Input id={name} name={name} type={type} {...register(name)} />
    {errors && errors[name] && (
      <Styled.Error>{errors[name].message}</Styled.Error>
    )}
  </div>
);

export default Input;
