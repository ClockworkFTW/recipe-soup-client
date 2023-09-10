import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Fuse from "fuse.js";

import { useOutsideClick } from "../../../hooks/useOutsideClick";
import Cuisine, { cuisines } from "../../../components/Cuisine";
import { InputNorm } from "../../../components/Input";
import * as Styled from "./CuisinePicker.style";

function CuisinePicker() {
  const { getValues, setValue, formState } = useFormContext();

  const cuisine = getValues("cuisine");

  const [searchPattern, setSearchPattern] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const fuse = new Fuse(cuisines, {
    keys: ["code", "cuisine"],
    threshold: 0.3,
  });

  const results = fuse.search(searchPattern);
  results.length = 5;

  function handleOpenSearch() {
    setIsSearching(true);
  }

  function handleChangeSearch(query) {
    setSearchPattern(query);
  }

  function handleCloseSearch() {
    setSearchPattern("");
    setIsSearching(false);
  }

  function handleUpdateCuisine(cuisine) {
    setValue("cuisine", cuisine);
    handleCloseSearch();
  }

  const ref = useOutsideClick(handleCloseSearch);

  return (
    <Styled.Container ref={ref} $isSearching={isSearching || !cuisine}>
      {cuisine && !isSearching ? (
        <Styled.Selection onClick={handleOpenSearch}>
          <Cuisine cuisine={cuisine} />
        </Styled.Selection>
      ) : (
        <InputNorm
          autoFocus
          type="text"
          name="cuisine"
          placeholder="Cuisine"
          value={searchPattern}
          onChange={handleChangeSearch}
          errors={formState.errors}
        />
      )}
      {(isSearching || !cuisine) && results.some(() => true) && (
        <Styled.Options>
          {results.map(({ item }) => (
            <Styled.Option
              key={item.code}
              onClick={() => handleUpdateCuisine(item.name)}
            >
              <Cuisine cuisine={item.name} />
            </Styled.Option>
          ))}
        </Styled.Options>
      )}
    </Styled.Container>
  );
}

export default CuisinePicker;
