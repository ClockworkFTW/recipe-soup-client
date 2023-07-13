import { useContext } from "react";
import moment from "moment";

import { RecipeEditorContext } from "../RecipeEditor.context";

import Select from "../../../components/Select/Select";

function TimePicker({ timeType }) {
  const { editedRecipe, dispatch } = useContext(RecipeEditorContext);

  const duration = moment.duration(editedRecipe[`${timeType}Time`]);

  const hours = duration.get("h");
  const minutes = duration.get("m");

  const hourOptions = [...Array(24).keys()];
  const minuteOptions = [...Array(60).keys()];

  function updateTime(time) {
    switch (timeType) {
      case "prep":
        dispatch({ type: "UPDATE_PREP_TIME", time });
        break;
      case "cook":
        dispatch({ type: "UPDATE_COOK_TIME", time });
        break;
      default:
        break;
    }
  }

  function handleUpdateHours(value) {
    const diff = value - hours;
    duration.add(diff, "h");
    const time = duration.toISOString();
    updateTime(time);
  }

  function handleUpdateMinutes(value) {
    const diff = value - minutes;
    duration.add(diff, "m");
    const time = duration.toISOString();
    updateTime(time);
  }

  return (
    <div>
      <h3>{timeType} Time</h3>
      <Select
        label="Hours"
        options={hourOptions}
        value={hours}
        onChange={handleUpdateHours}
      />
      <Select
        label="Minutes"
        options={minuteOptions}
        value={minutes}
        onChange={handleUpdateMinutes}
      />
    </div>
  );
}

export default TimePicker;
