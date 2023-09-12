import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../../components/Button";
import { InputForm } from "../../../components/Input";
import { useLoginUser } from "../../../hooks/useLoginUser";
import * as Styled from "../Auth.styles";

const schema = yup.object({
  email: yup.string().required("Required").email("Not a valid email"),
  password: yup.string().required("Required").min(10, "10 characters minimum"),
});

const Login = () => {
  const { loginUser, loading, error } = useLoginUser();

  const resolver = yupResolver(schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  return (
    <form onSubmit={handleSubmit(loginUser)}>
      <h2>Login</h2>
      {!error && <p>Welcome back, chef!</p>}
      {error && <p>{error.message}</p>}
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
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          icon="lock"
          register={register}
          errors={errors}
        />
      </Styled.Input>
      <p>
        <Styled.Link>
          <Link to="/forgot-password">Forgot your Password?</Link>
        </Styled.Link>
      </p>
      <Styled.Button>
        <Button type="submit" label={loading ? "Loading..." : "Login"} />
      </Styled.Button>
      <p>
        Don't have an account yet? Register{" "}
        <Styled.Link>
          <Link to="/register">here</Link>
        </Styled.Link>
        .
      </p>
    </form>
  );
};

export default Login;
