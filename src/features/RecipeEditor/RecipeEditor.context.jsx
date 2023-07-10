import { createContext } from "react";
import { useImmerReducer } from "use-immer";
import { v4 as uuidv4 } from "uuid";

export const RecipeEditorContext = createContext(null);

function recipeEditorReducer(draft, action) {
  switch (action.type) {
    case "ADD_INGREDIENT": {
      draft.ingredients.push({ id: uuidv4(), index: action.index, text: "" });
      break;
    }
    case "UPDATE_INGREDIENT": {
      const index = draft.ingredients.findIndex((i) => i.id === action.id);
      draft.ingredients[index].text = action.text;
      break;
    }
    case "REORDER_INGREDIENTS": {
      draft.ingredients = action.ingredients;
      break;
    }
    case "DELETE_INGREDIENT": {
      draft.ingredients = draft.ingredients.filter((i) => i.id !== action.id);
      break;
    }
    case "ADD_INSTRUCTION": {
      draft.instructions.push({ id: uuidv4(), index: action.index, text: "" });
      break;
    }
    case "UPDATE_INSTRUCTION": {
      const index = draft.instructions.findIndex((i) => i.id === action.id);
      draft.instructions[index].text = action.text;
      break;
    }
    case "REORDER_INSTRUCTIONS": {
      draft.instructions = action.instructions;
      break;
    }
    case "DELETE_INSTRUCTION": {
      draft.instructions = draft.instructions.filter((i) => i.id !== action.id);
      break;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function RecipeEditorProvider({ children, initialState }) {
  const [state, dispatch] = useImmerReducer(recipeEditorReducer, initialState);

  return (
    <RecipeEditorContext.Provider value={[state, dispatch]}>
      {children}
    </RecipeEditorContext.Provider>
  );
}
