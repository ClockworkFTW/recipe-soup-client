import { useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Skeleton from "react-loading-skeleton";
import * as yup from "yup";

import { useGetRecipe } from "../../hooks/useGetRecipe";
import CuisinePicker from "./CuisinePicker";
import FormControls from "./FormControls";
import ImagePicker from "./ImagePicker";
import IngredientList from "./IngredientList";
import InstructionList from "./InstructionList";
import NameInput from "./NameInput";
import RatingPicker from "./RatingPicker";
import ServingSelect from "./ServingSelect";
import TimeSelect from "./TimeSelect";
import * as Styled from "./RecipeEditor.styles";

const schema = yup.object({
  name: yup.string().required("Required"),
  cuisine: yup.string().required("Required"),
  image: yup.mixed().nullable().required("Required"),
  ingredients: yup
    .array()
    .of(yup.object({ text: yup.string().required("Required") })),
  instructions: yup
    .array()
    .of(yup.object({ text: yup.string().required("Required") })),
});

function RecipeEditor() {
  const { recipeId } = useParams();

  const { data, isLoading, isSuccess, isError } = useGetRecipe(recipeId);

  const recipe = data || {
    name: "",
    prepTime: null,
    cookTime: null,
    cuisine: null,
    image: null,
    rating: 0,
    servings: 1,
    ingredients: [{ text: "" }],
    instructions: [{ text: "", type: "step" }],
  };

  if (isLoading && recipeId !== "new") {
    return (
      <Styled.Container>
        <Styled.Header>
          <Skeleton style={{ aspectRatio: 1 }} />
          <Styled.Content>
            <Skeleton height={30} />
            <Skeleton height={30} />
            <Skeleton height={30} />
            <Skeleton height={30} />
          </Styled.Content>
        </Styled.Header>
        <Styled.Body>
          <div>
            <Skeleton count={10} height={30} style={{ marginBottom: "1rem" }} />
          </div>
          <div>
            <Skeleton count={10} height={30} style={{ marginBottom: "1rem" }} />
          </div>
        </Styled.Body>
      </Styled.Container>
    );
  }

  if (isError) {
    return null;
  }

  return isSuccess || recipeId === "new" ? (
    <RecipeEditorForm defaultValues={recipe} />
  ) : null;
}

function RecipeEditorForm({ defaultValues }) {
  const originalRecipe = JSON.stringify(defaultValues);

  const form = useForm({
    defaultValues: { ...defaultValues, originalRecipe },
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...form}>
      <Styled.Container>
        <Styled.Header>
          <ImagePicker />
          <Styled.Content>
            <Styled.ContentTop>
              <CuisinePicker />
              <FormControls />
            </Styled.ContentTop>
            <Styled.ContentMid>
              <NameInput />
              <RatingPicker />
            </Styled.ContentMid>
            <Styled.ContentBot>
              <ServingSelect />
              <TimeSelect timeType="prep" />
              <TimeSelect timeType="cook" />
            </Styled.ContentBot>
          </Styled.Content>
        </Styled.Header>
        <Styled.Body>
          <IngredientList />
          <InstructionList />
        </Styled.Body>
      </Styled.Container>
    </FormProvider>
  );
}

export default RecipeEditor;
