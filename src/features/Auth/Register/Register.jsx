import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ButtonPrimary } from "../../../components/Button";
import { InputForm } from "../../../components/Input";
import { useRegisterUser } from "../../../hooks/useRegisterUser";
import * as Styled from "../Auth.styles";

const schema = yup.object({
  username: yup.string().required("Required"),
  email: yup.string().email("Not a valid email").required("Required"),
  passwordA: yup.string().required("Required").min(10, "10 characters minimum"),
  passwordB: yup.string().required("Required").min(10, "10 characters minimum"),
});

const Register = () => {
  const { registerUser, loading, error } = useRegisterUser();

  const resolver = yupResolver(schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  return (
    <form onSubmit={handleSubmit(registerUser)}>
      <Styled.Header>
        <h2>Register an Account</h2>
        {!error && <p>Ready to begin your culinary adventure?</p>}
      </Styled.Header>
      <Styled.Content>
        {error && <p>{error.message}</p>}
        <Styled.Input>
          <InputForm
            name="username"
            type="text"
            label="Username"
            placeholder="Username"
            icon="hat-chef"
            register={register}
            errors={errors}
          />
        </Styled.Input>
        <Styled.Input>
          <InputForm
            name="email"
            type="text"
            label="Email"
            placeholder="Email"
            icon="envelope"
            register={register}
            errors={errors}
          />
        </Styled.Input>
        <Styled.Input>
          <InputForm
            name="passwordA"
            type="password"
            label="Password"
            placeholder="Password"
            icon="lock"
            register={register}
            errors={errors}
          />
        </Styled.Input>
        <Styled.Input>
          <InputForm
            name="passwordB"
            type="password"
            label="Confirm Password"
            placeholder="Password"
            icon="lock"
            register={register}
            errors={errors}
          />
        </Styled.Input>
      </Styled.Content>
      <Styled.Footer>
        <Styled.Button>
          <ButtonPrimary
            type="submit"
            label={loading ? "Loading..." : "Register"}
          />
        </Styled.Button>
        <p>
          Already have an account?
          <br />
          Login{" "}
          <Styled.Link>
            <Link to="/login">here</Link>
          </Styled.Link>
          .
        </p>
      </Styled.Footer>
    </form>
  );
};

export default Register;
