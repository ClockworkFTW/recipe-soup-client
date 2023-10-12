import { useSearchParams } from "react-router-dom";

import InputNorm from "../../../../components/Input/InputNorm";

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
    <InputNorm
      type="text"
      name="query"
      icon="magnifying-glass"
      placeholder="Search Recipes..."
      defaultValue={query}
      onKeyUp={handleQueryChange}
    />
  );
}

export default Query;
