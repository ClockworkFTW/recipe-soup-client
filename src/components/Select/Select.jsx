import { useState } from "react";

import Icon from "../Icon";
import * as Styled from "./Select.styles";

function Select({ label, options, value, unit, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  function handleOptionClick(option) {
    onChange(option);
    toggleIsOpen();
  }

  return (
    <Styled.Container>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.Selection $isOpen={isOpen} onClick={toggleIsOpen}>
        <Styled.Value>{unit ? `${value} ${unit}` : value}</Styled.Value>
        <Styled.Arrow>
          <Icon icon={isOpen ? "angle-up" : "angle-down"} />
        </Styled.Arrow>
      </Styled.Selection>
      {isOpen && (
        <Styled.Options>
          {options.map((option) => (
            <Styled.Option
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </Styled.Option>
          ))}
        </Styled.Options>
      )}
    </Styled.Container>
  );
}

export default Select;
