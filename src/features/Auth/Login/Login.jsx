import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../../components/Input";

import { useAuth } from "../../../hooks/useAuth";
import { useLoginUser } from "../../../hooks/useLoginUser";

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
        <Input
          name="email"
          type="text"
          label="Email"
          register={register}
          errors={errors}
        />
        <Input
          name="password"
          type="password"
          label="Password"
          register={register}
          errors={errors}
        />
        <button type="submit">{loading ? "Loading" : "Submit"}</button>
        <p>
          Don't have an account yet? Register <Link to="/register">here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
