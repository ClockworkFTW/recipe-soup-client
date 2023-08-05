import {
  useName,
  useRecipeEditorActions,
} from "../../../hooks/useRecipeEditor";

const NameInput = () => {
  const name = useName();

  const { updateName } = useRecipeEditorActions();

  function handleNameChange(event) {
    updateName(event.target.value);
  }

  return <input type="text" value={name} onChange={handleNameChange} />;
};

export default NameInput;
