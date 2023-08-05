import {
  useDescription,
  useRecipeEditorActions,
} from "../../../hooks/useRecipeEditor";

const DescriptionInput = () => {
  const description = useDescription();
  const { updateDescription } = useRecipeEditorActions();

  function handleDescriptionChange(event) {
    updateDescription(event.target.value);
  }

  return (
    <div>
      <h3>Description</h3>
      <textarea
        type="text"
        value={description || ""}
        onChange={handleDescriptionChange}
      />
    </div>
  );
};

export default DescriptionInput;
