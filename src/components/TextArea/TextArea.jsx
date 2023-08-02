import { useRef } from "react";

import ContentEditable from "react-contenteditable";

import * as Styled from "./TextArea.styles";

const TextArea = ({ name, label, value, onChange }) => {
  const contentEditable = useRef(null);
  return (
    <Styled.Container>
      {label && <Styled.Label htmlFor={name}>{label}</Styled.Label>}
      <Styled.Content>
        <ContentEditable
          innerRef={contentEditable}
          id={name}
          html={value}
          onChange={onChange}
          tagName="span"
        />
      </Styled.Content>
    </Styled.Container>
  );
};

export default TextArea;
