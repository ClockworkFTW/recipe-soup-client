import { useSearchParams } from "react-router-dom";

import * as Styled from "./Query.style";

function Query() {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  function handleQueryChange(event) {
    if (event.key === "Enter") {
      setSearchParams({
        ...Object.fromEntries([...searchParams]),
        query: event.target.value,
        page: 1,
      });
    }
  }

  return (
    <Styled.Input
      placeholder="Search Recipes..."
      defaultValue={query}
      onKeyUp={handleQueryChange}
    />
  );
}

export default Query;
