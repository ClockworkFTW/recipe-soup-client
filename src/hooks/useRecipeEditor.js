import { create } from "zustand";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";
import { useGetRecipe } from "./useGetRecipe";

const useRecipeEditorStore = create((set) => ({
  originalRecipe: null,
  editedRecipe: null,
  actions: {
    initializeStore: (data) =>
      set({ editedRecipe: data, originalRecipe: JSON.stringify(data) }),

    updateName: (name) =>
      set(
        produce((state) => {
          state.editedRecipe.name = name;
        })
      ),

    updateDescription: (description) =>
      set(
        produce((state) => {
          state.editedRecipe.description = description;
        })
      ),

    updatePrepTime: (prepTime) =>
      set(
        produce((state) => {
          state.editedRecipe.prepTime = prepTime;
        })
      ),

    updateCookTime: (cookTime) =>
      set(
        produce((state) => {
          state.editedRecipe.cookTime = cookTime;
        })
      ),

    updateAssemblyTime: (assemblyTime) =>
      set(
        produce((state) => {
          state.editedRecipe.assemblyTime = assemblyTime;
        })
      ),

    updateCuisine: (cuisine) =>
      set(
        produce((state) => {
          state.editedRecipe.cuisine = cuisine;
        })
      ),

    updateRating: (rating) =>
      set(
        produce((state) => {
          state.editedRecipe.rating = rating;
        })
      ),

    updateServings: (servings) =>
      set(
        produce((state) => {
          state.editedRecipe.servings = servings;
        })
      ),

    updateImage: (image) =>
      set(
        produce((state) => {
          state.editedRecipe.image = image;
        })
      ),

    addIngredient: (index) =>
      set(
        produce((state) => {
          state.editedRecipe.ingredients.push({
            id: uuidv4(),
            index: state.editedRecipe.ingredients.length,
            text: "",
          });
        })
      ),

    updateIngredient: (ingredientId, text) =>
      set(
        produce((state) => {
          const index = state.editedRecipe.ingredients.findIndex(
            (ingredient) => ingredient.id === ingredientId
          );
          state.editedRecipe.ingredients[index].text = text;
        })
      ),

    deleteIngredient: (ingredientId) =>
      set(
        produce((state) => {
          state.editedRecipe.ingredients.filter(
            (ingredient) => ingredient.id !== ingredientId
          );
        })
      ),

    updateIngredients: (ingredients) =>
      set(
        produce((state) => {
          state.editedRecipe.ingredients = ingredients;
        })
      ),

    addInstructionSection: () =>
      set(
        produce((state) => {
          state.editedRecipe.instructions.push({
            id: uuidv4(),
            index: state.editedRecipe.instructions.length,
            type: "section",
            text: "",
          });
        })
      ),

    addInstructionStep: () =>
      set(
        produce((state) => {
          state.editedRecipe.instructions.push({
            id: uuidv4(),
            index: state.editedRecipe.instructions.length,
            type: "step",
            text: "",
          });
        })
      ),

    updateInstruction: (instructionId, text) =>
      set(
        produce((state) => {
          const index = state.editedRecipe.instructions.findIndex(
            (instruction) => instruction.id === instructionId
          );
          state.editedRecipe.instructions[index].text = text;
        })
      ),

    deleteInstruction: (instructionId) =>
      set(
        produce((state) => {
          state.editedRecipe.instructions.filter(
            (instruction) => instruction.id !== instructionId
          );
        })
      ),

    updateInstructions: (instructions) =>
      set(
        produce((state) => {
          state.editedRecipe.instructions = instructions;
        })
      ),
  },
}));

export function useInitializeRecipeEditor(recipeId) {
  const { data, isLoading, isError, isSuccess } = useGetRecipe(recipeId);

  const { initializeStore } = useRecipeEditorActions();

  if (recipeId === "new") {
    initializeStore({
      name: "",
      description: "",
      image: null,
      prepTime: null,
      cookTime: null,
      assemblyTime: null,
      cuisine: null,
      category: null,
      rating: 0,
      servings: 1,
      ingredients: [],
      instructions: [],
    });
  } else if (data) {
    initializeStore(data);
  }

  return { isLoading, isError, isSuccess: recipeId === "new" || isSuccess };
}

export function useRecipeEditorState() {
  return useRecipeEditorStore(({ originalRecipe, editedRecipe }) => ({
    originalRecipe,
    editedRecipe,
  }));
}

export function useName() {
  return useRecipeEditorStore((state) => state.editedRecipe.name);
}

export function useDescription() {
  return useRecipeEditorStore((state) => state.editedRecipe.description);
}

export function useImage() {
  return useRecipeEditorStore((state) => state.editedRecipe.image);
}

export function useRating() {
  return useRecipeEditorStore((state) => state.editedRecipe.rating);
}

export function usePrepTime() {
  return useRecipeEditorStore((state) => state.editedRecipe.prepTime);
}

export function useCookTime() {
  return useRecipeEditorStore((state) => state.editedRecipe.cookTime);
}

export function useAssemblyTime() {
  return useRecipeEditorStore((state) => state.editedRecipe.assemblyTime);
}

export function useIngredients() {
  return useRecipeEditorStore((state) => state.editedRecipe.ingredients);
}

export function useInstructions() {
  return useRecipeEditorStore((state) => state.editedRecipe.instructions);
}

export function useCuisine() {
  return useRecipeEditorStore((state) => state.editedRecipe.cuisine);
}

export function useCategory() {
  return useRecipeEditorStore((state) => state.editedRecipe.category);
}

export function useServings() {
  return useRecipeEditorStore((state) => state.editedRecipe.servings);
}

export function useRecipeEditorActions() {
  return useRecipeEditorStore((state) => state.actions);
}
