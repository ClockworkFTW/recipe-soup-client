import { useSearchParams } from "react-router-dom";

import Menu from "./Menu";
import Pagination from "./Pagination";
import RecipeCard from "./RecipeCard";
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

  return (
    <div>
      <Menu />
      <Styled.Grid>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Styled.Grid>
      <Pagination count={count} />
    </div>
  );
}

export default RecipeList;
