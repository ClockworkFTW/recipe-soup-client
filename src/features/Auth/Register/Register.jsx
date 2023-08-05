import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useAuth } from "../../../hooks/useAuth";
import { useRegisterUser } from "../../../hooks/useRegisterUser";

const schema = yup.object({
  username: yup.string().required("Required"),
  email: yup.string().email("Not a valid email").required("Required"),
  passwordA: yup.string().required("Required").min(10, "10 characters minimum"),
  passwordB: yup.string().required("Required").min(10, "10 characters minimum"),
});

const Register = () => {
  const auth = useAuth();
  const { registerUser, loading, error } = useRegisterUser();

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
      <h2>Register</h2>
      <form onSubmit={handleSubmit(registerUser)}>
        {error && <p>{error.message}</p>}
        <Input
          name="username"
          type="text"
          label="Username"
          register={register}
          errors={errors}
        />
        <Input
          name="email"
          type="text"
          label="Email"
          register={register}
          errors={errors}
        />
        <Input
          name="passwordA"
          type="password"
          label="Password"
          register={register}
          errors={errors}
        />
        <Input
          name="passwordB"
          type="password"
          label="Confirm Password"
          register={register}
          errors={errors}
        />
        <Button type="submit" label={loading ? "Loading" : "Submit"} />
        <p>
          Already have an account? Login <Link to="/login">here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
