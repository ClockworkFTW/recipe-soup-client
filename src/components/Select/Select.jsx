function Select({ label, options, value, onChange }) {
  function handleOnChange(event) {
    onChange(event.target.value);
  }
  return (
    <label>
      {label}
      <select value={value} onChange={handleOnChange}>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
