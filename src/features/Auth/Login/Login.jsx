import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useAuth } from "../../../hooks/useAuth";
import { useLoginUser } from "../../../hooks/useLoginUser";
import * as Styled from "./Login.styles";

const schema = yup.object({
  email: yup.string().required("Required").email("Not a valid email"),
  password: yup.string().required("Required").min(10, "10 characters minimum"),
});

const Login = () => {
  const auth = useAuth();
  const { loginUser, loading, error } = useLoginUser();

  const resolver = yupResolver(schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  return auth ? (
    <Navigate to="/recipes" />
  ) : (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(loginUser)}>
        {error && <p>{error.message}</p>}
        <Styled.InputGroup>
          <Input
            name="email"
            type="text"
            label="Email"
            placeholder="Email"
            icon="envelope"
            register={register}
            errors={errors}
          />
        </Styled.InputGroup>
        <Styled.InputGroup>
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            icon="lock"
            register={register}
            errors={errors}
          />
        </Styled.InputGroup>

        <Button type="submit" label={loading ? "Loading" : "Submit"} />
        <p>
          Don't have an account yet? Register <Link to="/register">here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
