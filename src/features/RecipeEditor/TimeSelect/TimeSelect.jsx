import { useFormContext, useWatch } from "react-hook-form";
import moment from "moment";

import Select from "../../../components/Select";
import * as Styled from "./TimeSelect.styles";

function TimeSelect({ timeType }) {
  const { setValue } = useFormContext();
  const timeValue = useWatch({ name: `${timeType}Time` });

  const duration = moment.duration(timeValue);

  const hours = duration.get("h");
  const minutes = duration.get("m");

  function handleUpdateHours(value) {
    const diff = value - hours;
    duration.add(diff, "h");
    setValue(`${timeType}Time`, duration.toISOString());
  }

  function handleUpdateMinutes(value) {
    const diff = value - minutes;
    duration.add(diff, "m");
    setValue(`${timeType}Time`, duration.toISOString());
  }

  const hourOptions = [...Array(24).keys()];
  const minuteOptions = [...Array(60).keys()];

  return (
    <Styled.Container>
      <Styled.Label>{timeType}</Styled.Label>
      <Select
        unit="hrs"
        value={hours}
        options={hourOptions}
        onChange={handleUpdateHours}
      />
      <Select
        unit="mins"
        value={minutes}
        options={minuteOptions}
        onChange={handleUpdateMinutes}
      />
    </Styled.Container>
  );
}

export default TimeSelect;
