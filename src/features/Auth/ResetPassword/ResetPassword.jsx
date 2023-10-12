import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { ButtonPrimary } from "../../../components/Button";
import { InputForm } from "../../../components/Input";
import { useResetPassword } from "../../../hooks/useResetPassword";
import * as Styled from "../Auth.styles";

const schema = yup.object({
  passwordA: yup.string().required("Required").min(10, "10 characters minimum"),
  passwordB: yup.string().required("Required").min(10, "10 characters minimum"),
});

const ResetPassword = () => {
  const { resetPassword, loading, success, error } = useResetPassword();

  const resolver = yupResolver(schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });

  return (
    <form onSubmit={handleSubmit(resetPassword)}>
      <Styled.Header>
        <h2>Reset Password</h2>
        {success && (
          <p>
            Your password has been updated successfully.
            <br />
            Please proceed to the{" "}
            <Styled.Link>
              <Link to="/login">login</Link>
            </Styled.Link>{" "}
            page.
          </p>
        )}
      </Styled.Header>
      <Styled.Content>
        {error && <p>{error.message}</p>}
        <Styled.Input>
          <InputForm
            name="passwordA"
            type="password"
            label="New Password"
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
            label={loading ? "Loading..." : "Reset Password"}
          />
        </Styled.Button>
      </Styled.Footer>
    </form>
  );
};

export default ResetPassword;
