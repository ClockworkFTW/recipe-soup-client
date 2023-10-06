import { useNavigate, useSearchParams } from "react-router-dom";

import Icon from "../../../components/Icon";
import Button from "../../../components/Button";
import * as Styled from "./Menu.style";

function Menu() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const sort = searchParams.get("sort") || "new";

  function handleQueryChange(event) {
    if (event.key === "Enter") {
      setSearchParams({
        ...Object.fromEntries([...searchParams]),
        query: event.target.value,
        page: 1,
      });
    }
  }

  function handleSortChange(sort) {
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      sort,
    });
  }

  function handleAddRecipe() {
    navigate("/recipes/edit/new");
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Group>
          <Styled.Input
            placeholder="Search Recipes..."
            defaultValue={query}
            onKeyUp={handleQueryChange}
          />
          <Icon icon="sort" />
          <Styled.Button
            $isActive={sort === "new"}
            onClick={() => handleSortChange("new")}
          >
            <Icon icon="seedling" /> New
          </Styled.Button>
          <Styled.Button
            $isActive={sort === "rating"}
            onClick={() => handleSortChange("rating")}
          >
            <Icon icon="star" /> Rating
          </Styled.Button>
          <Styled.Button
            $isActive={sort === "time"}
            onClick={() => handleSortChange("time")}
          >
            <Icon icon="clock" /> Time
          </Styled.Button>
        </Styled.Group>
        <Button label="Add Recipe" onClick={handleAddRecipe} />
      </Styled.Content>
    </Styled.Container>
  );
}

export default Menu;
