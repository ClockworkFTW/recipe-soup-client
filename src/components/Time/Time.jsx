import moment from "moment";

function Time({ label, timeArray }) {
  const duration = moment.duration(timeArray[0]);

  for (let i = 1; i < timeArray.length; i++) {
    duration.add(moment.duration(timeArray[i]));
  }

  const h = duration.get("h").toString();
  const m = duration.get("m").toString();

  const time = `${h}:${m.length === 1 ? "0".concat(m) : m}`;

  return (
    <p>
      {label} {time}
    </p>
  );
}

export default Time;
