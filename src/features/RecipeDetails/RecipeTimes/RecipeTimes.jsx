import { Fragment } from "react";

import Time from "../../../components/Time";
import * as Styled from "./RecipeTimes.style";

const RecipeTimes = ({ times }) => (
  <Styled.Container cols={times.length * 2 + 1}>
    {times.map((time, index) =>
      time.value ? (
        <Fragment key={index}>
          <Time label={time.label} timeArray={[time.value]} />
          {index !== times.length && <Styled.Spacer />}
        </Fragment>
      ) : null
    )}
    <Time label="total" timeArray={times.map((time) => time.value)} />
  </Styled.Container>
);

export default RecipeTimes;
