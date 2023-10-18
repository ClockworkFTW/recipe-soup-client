import { useSearchParams } from "react-router-dom";

import Menu from "./Menu";
import Empty from "./Empty";
import Pagination from "./Pagination";
import RecipeCard, { SkeletonCard } from "./RecipeCard";
import { useGetRecipes } from "../../hooks/useGetRecipes";
import * as Styled from "./RecipeList.style";

function RecipeList() {
  const [searchParams] = useSearchParams();

  const { data, isLoading, isSuccess, isError } = useGetRecipes({
    page: searchParams.get("page") || 1,
    query: searchParams.get("query") || "",
    sort: searchParams.get("sort") || "new",
  });

  function renderLoader() {
    if (isLoading) {
      return (
        <Styled.Grid>
          {[...Array(9)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </Styled.Grid>
      );
    }
  }

  function renderData() {
    if (isSuccess) {
      if (data.recipes.length) {
        return (
          <>
            <Styled.Grid>
              {data.recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </Styled.Grid>
            <Pagination count={data.count} />
          </>
        );
      } else {
        return <Empty />;
      }
    }
  }

  function renderError() {
    if (isError) {
      return null;
    }
  }

  return (
    <Styled.Container>
      <Menu />
      {renderLoader()}
      {renderData()}
      {renderError()}
    </Styled.Container>
  );
}

export default RecipeList;
