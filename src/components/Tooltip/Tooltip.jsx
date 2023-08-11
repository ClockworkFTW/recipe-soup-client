import { Tooltip as TT } from "react-tooltip";

const style = {
  zIndex: 1,
  borderRadius: "0.6em",
  backgroundColor: "#ef4444",
  fontSize: "16px",
  fontWeight: "normal",
  padding: "0.5em",
};

const Tooltip = ({ anchorSelect, content }) => (
  <TT anchorSelect={anchorSelect} content={content} style={style} />
);

export default Tooltip;
