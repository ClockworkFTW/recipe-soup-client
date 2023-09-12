import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../../../components/Button";
import { InputForm } from "../../../components/Input";
import { useForgotPassword } from "../../../hooks/useForgotPassword";
import * as Styled from "../Auth.styles";

const schema = yup.object({
  email: yup.string().required("Required"),
});

const ResetPassword = () => {
  const { forgotPassword, loading, success, error } = useForgotPassword();

  const resolver = yupResolver(schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  return (
    <form onSubmit={handleSubmit(forgotPassword)}>
      <h2>Forgot your Password?</h2>
      {!success && !error && (
        <p>No worries, we will send you a link to reset it.</p>
      )}
      {success && <p>A reset link has been sent to your email account.</p>}
      {error && <p>{error.message}</p>}
      <Styled.Input>
        <InputForm
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          icon="envelope"
          register={register}
          errors={errors}
        />
      </Styled.Input>
      <p>
        <Styled.Link>
          <Link to="/login">Return to login.</Link>
        </Styled.Link>
      </p>
      <Styled.Button>
        <Button type="submit" label={loading ? "Loading..." : "Send Link"} />
      </Styled.Button>
    </form>
  );
};

export default ResetPassword;
