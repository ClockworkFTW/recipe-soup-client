import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ButtonPrimary, ButtonSecondary } from "../../../components/Button";
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

  function handleDemoClicked() {
    loginUser({ email: "demo@recipesoup.app", password: "password123" });
  }

  return (
    <form onSubmit={handleSubmit(loginUser)}>
      <Styled.Header>
        <h2>Login</h2>
        {!error && <p>Welcome back, chef!</p>}
      </Styled.Header>
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
      <Styled.Footer>
        <p>
          <Styled.Link>
            <Link to="/forgot-password">Forgot your Password?</Link>
          </Styled.Link>
        </p>
        <Styled.Button>
          <ButtonPrimary
            type="submit"
            label={loading ? "Loading..." : "Login"}
          />
          <ButtonSecondary
            label={loading ? "Loading..." : "Demo"}
            onClick={handleDemoClicked}
          />
        </Styled.Button>

        <p>
          Don't have an account yet?
          <br />
          Register{" "}
          <Styled.Link>
            <Link to="/register">here</Link>
          </Styled.Link>
          .
        </p>
      </Styled.Footer>
    </form>
  );
};

export default Login;
