import { useFormContext, useWatch } from "react-hook-form";

import Counter from "../../../components/Counter";
import * as Styled from "./ServingSelect.style";

const ServingsInput = () => {
  const { setValue } = useFormContext();
  const servings = useWatch({ name: "servings" });

  function handleDecrementServings() {
    if (servings > 1) {
      setValue("servings", Number(servings - 1));
    }
  }

  function handleIncrementServings() {
    setValue("servings", Number(servings + 1));
  }

  return (
    <Styled.Container>
      <Counter
        unit="servings"
        value={servings}
        decrementValue={handleDecrementServings}
        incrementValue={handleIncrementServings}
      />
    </Styled.Container>
  );
};

export default ServingsInput;
