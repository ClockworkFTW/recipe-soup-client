import * as Styled from "./Input.styles";

const Input = ({ name, label, register, errors, type }) => {
  const error = errors[name];
  return (
    <Styled.Container>
      <Styled.Label htmlFor={name}>{label}</Styled.Label>
      <Styled.Input
        id={name}
        name={name}
        type={type}
        {...register(name)}
        $hasErrors={error}
      />
      {error && <Styled.Error>{error.message}</Styled.Error>}
    </Styled.Container>
  );
};

export default Input;
