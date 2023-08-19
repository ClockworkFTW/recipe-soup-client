import moment from "moment";

import * as Styled from "./Time.style";

function Time({ label, values }) {
  const duration = moment.duration(values[0]);

  for (let i = 1; i < values.length; i++) {
    duration.add(moment.duration(values[i]));
  }

  const h = duration.get("h").toString();
  const m = duration.get("m").toString();

  return (
    <div>
      <Styled.Label>{label}</Styled.Label>
      <Styled.Content>
        {h > 0 && `${h} hr${h == 1 ? "" : "s"}${m > 0 ? " " : ""}`}
        {m > 0 && `${m} min${m == 1 ? "" : "s"}`}
      </Styled.Content>
    </div>
  );
}

export default Time;
