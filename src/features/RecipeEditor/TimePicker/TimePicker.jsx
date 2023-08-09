import { useFormContext, useWatch } from "react-hook-form";

import TimeSelect from "./TimeSelect";
import * as Styled from "./TimePicker.styles";

function TimePicker() {
  const { setValue } = useFormContext();

  const prepTime = useWatch({ name: "prepTime" });
  const cookTime = useWatch({ name: "cookTime" });

  function updateTime(timeType, value) {
    setValue(`${timeType}Time`, value);
  }

  return (
    <Styled.Container>
      <TimeSelect
        timeType="prep"
        timeValue={prepTime}
        updateTime={updateTime}
      />
      <Styled.Spacer />
      <TimeSelect
        timeType="cook"
        timeValue={cookTime}
        updateTime={updateTime}
      />
    </Styled.Container>
  );
}

export default TimePicker;
