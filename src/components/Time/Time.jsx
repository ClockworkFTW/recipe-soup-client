import moment from "moment";

import * as Styled from "./Time.style";

function Time({ label, timeArray }) {
  const duration = moment.duration(timeArray[0]);

  for (let i = 1; i < timeArray.length; i++) {
    duration.add(moment.duration(timeArray[i]));
  }

  const h = duration.get("h").toString();
  const m = duration.get("m").toString();

  return (
    <div>
      <Styled.Label>{label} time</Styled.Label>
      <div>
        {h > 0 && `${h} hr${h == 1 ? "" : "s"}${m > 0 ? " " : ""}`}
        {m > 0 && `${m} min${m == 1 ? "" : "s"}`}
      </div>
    </div>
  );
}

export default Time;
