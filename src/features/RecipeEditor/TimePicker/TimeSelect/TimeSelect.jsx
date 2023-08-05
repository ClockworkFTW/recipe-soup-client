import moment from "moment";

import Select from "../../../../components/Select";
import * as Styled from "./TimeSelect.styles";

function TimeSelect({ timeType, timeValue, updateTime }) {
  const duration = moment.duration(timeValue);

  const hours = duration.get("h");
  const minutes = duration.get("m");

  function handleUpdateHours(value) {
    const diff = value - hours;
    duration.add(diff, "h");
    updateTime(duration.toISOString());
  }

  function handleUpdateMinutes(value) {
    const diff = value - minutes;
    duration.add(diff, "m");
    updateTime(duration.toISOString());
  }

  const hourOptions = [...Array(24).keys()];
  const minuteOptions = [...Array(60).keys()];

  return (
    <div>
      <Styled.Label>{timeType} time</Styled.Label>
      <Styled.Content>
        <Select
          unit="Hrs"
          value={hours}
          options={hourOptions}
          onChange={handleUpdateHours}
        />
        <Select
          unit="Mins"
          value={minutes}
          options={minuteOptions}
          onChange={handleUpdateMinutes}
        />
      </Styled.Content>
    </div>
  );
}

export default TimeSelect;
