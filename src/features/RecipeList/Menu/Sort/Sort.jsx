import { useSearchParams } from "react-router-dom";

import { ButtonPrimary, ButtonSecondary } from "../../../../components/Button";
import * as Styled from "./Sort.style";

function Sort() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sort = searchParams.get("sort") || "new";

  function handleSortChange(sort) {
    setSearchParams({
      ...Object.fromEntries([...searchParams]),
      sort,
    });
  }

  return (
    <>
      <Styled.Label>Sort:</Styled.Label>
      {sort === "new" ? (
        <ButtonPrimary
          label="New"
          icon="seedling"
          onClick={() => handleSortChange("new")}
        />
      ) : (
        <ButtonSecondary
          label="New"
          icon="seedling"
          onClick={() => handleSortChange("new")}
        />
      )}
      {sort === "rating" ? (
        <ButtonPrimary
          label="Rating"
          icon="star"
          onClick={() => handleSortChange("rating")}
        />
      ) : (
        <ButtonSecondary
          label="Rating"
          icon="star"
          onClick={() => handleSortChange("rating")}
        />
      )}
      {sort === "time" ? (
        <ButtonPrimary
          label="Time"
          icon="clock"
          onClick={() => handleSortChange("time")}
        />
      ) : (
        <ButtonSecondary
          label="Time"
          icon="clock"
          onClick={() => handleSortChange("time")}
        />
      )}
    </>
  );
}

export default Sort;
