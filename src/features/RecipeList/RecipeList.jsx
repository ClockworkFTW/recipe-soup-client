import { useSearchParams } from "react-router-dom";

import Menu from "./Menu";
import Pagination from "./Pagination";
import RecipeCard from "./RecipeCard";
import Empty from "./Empty";
import { useGetRecipes } from "../../hooks/useGetRecipes";
import * as Styled from "./RecipeList.style";

function RecipeList() {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: { count, recipes },
  } = useGetRecipes({
    page: searchParams.get("page") || 1,
    query: searchParams.get("query") || "",
    sort: searchParams.get("sort") || "new",
  });

  console.log(recipes);

  return (
    <>
      <Menu />
      {recipes.length ? (
        <Styled.Grid>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </Styled.Grid>
      ) : (
        <Empty />
      )}
      <Pagination count={count} />
    </>
  );
}

export default RecipeList;
