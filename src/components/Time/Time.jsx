import moment from "moment";

function Time({ label, timeArray }) {
  const totalDuration = moment.duration(timeArray[0]);

  for (let i = 1; i < timeArray.length; i++) {
    totalDuration.add(moment.duration(timeArray[i]));
  }

  const h = totalDuration.get("h").toString();
  const m = totalDuration.get("m").toString();

  const time = `${h}:${m.length === 1 ? "0".concat(m) : m}`;

  return (
    <p>
      {label} {time}
    </p>
  );
}

export default Time;
