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

  function handleUpdateHours(value) {
    const diff = value - hours;
    duration.add(diff, "h");
    dispatch({ type: "UPDATE_TIME", time: duration.toISOString(), timeType });
  }

  function handleUpdateMinutes(value) {
    const diff = value - minutes;
    duration.add(diff, "m");
    dispatch({ type: "UPDATE_TIME", time: duration.toISOString(), timeType });
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
