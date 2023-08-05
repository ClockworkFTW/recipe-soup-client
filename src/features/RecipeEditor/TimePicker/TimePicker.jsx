import {
  usePrepTime,
  useCookTime,
  useAssemblyTime,
  useRecipeEditorActions,
} from "../../../hooks/useRecipeEditor";
import TimeSelect from "./TimeSelect";
import * as Styled from "./TimePicker.styles";

function TimePicker() {
  const prepTime = usePrepTime();
  const cookTime = useCookTime();
  const assemblyTime = useAssemblyTime();

  const { updatePrepTime, updateCookTime, updateAssemblyTime } =
    useRecipeEditorActions();

  return (
    <Styled.Container>
      <TimeSelect
        timeType="prep"
        timeValue={prepTime}
        updateTime={updatePrepTime}
      />
      <Styled.Spacer />
      <TimeSelect
        timeType="cook"
        timeValue={cookTime}
        updateTime={updateCookTime}
      />
      <Styled.Spacer />
      <TimeSelect
        timeType="assembly"
        timeValue={assemblyTime}
        updateTime={updateAssemblyTime}
      />
    </Styled.Container>
  );
}

export default TimePicker;
