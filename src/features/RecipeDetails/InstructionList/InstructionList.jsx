function InstructionList({ instructions }) {
  return (
    <div>
      <h3>Instructions</h3>
      <ul>
        {instructions.map((instruction) => (
          <li key={instruction.id}>{instruction.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default InstructionList;
