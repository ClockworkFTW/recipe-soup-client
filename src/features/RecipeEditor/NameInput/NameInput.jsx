import { useFormContext } from "react-hook-form";

import Input from "../../../components/Input";
import * as Styled from "./NameInput.style";

const NameInput = () => {
  const { register, formState } = useFormContext();

  return (
    <Styled.Container>
      <Input
        name="name"
        type="text"
        placeholder="Recipe Name"
        register={register}
        errors={formState.errors}
      />
    </Styled.Container>
  );
};

export default NameInput;
