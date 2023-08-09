import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Fuse from "fuse.js";

import { countries } from "../../../config";
import Country from "../../../components/Country";
import Input from "../../../components/Input";
import Icon from "../../../components/Icon";
import * as Styled from "./CuisinePicker.style";

function CuisinePicker() {
  const { getValues, setValue, formState } = useFormContext();

  const cuisine = getValues("cuisine");
  const error = formState.errors["cuisine"];

  const country = cuisine && countries.find((c) => c.cuisine === cuisine);

  const [searchPattern, setSearchPattern] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const fuse = new Fuse(countries, {
    keys: ["code", "cuisine"],
    threshold: 0.3,
  });

  const results = fuse.search(searchPattern);
  results.length = 5;

  function handleOpenSearch() {
    setIsSearching(true);
  }

  function handleCloseSearch() {
    setSearchPattern("");
    setIsSearching(false);
  }

  function handleUpdateCuisine(cuisine) {
    setValue("cuisine", cuisine);
    handleCloseSearch();
  }

  return (
    <Styled.Container $isSearching={isSearching || !cuisine}>
      {cuisine && !isSearching ? (
        <Styled.Selection onClick={handleOpenSearch}>
          <Country code={country.code} label={country.cuisine} />
        </Styled.Selection>
      ) : (
        <Styled.Search $hasError={error}>
          <Styled.Icon>
            <Icon icon="earth-americas" />
          </Styled.Icon>
          <Styled.Input
            autoFocus
            type="text"
            placeholder="Cuisine"
            value={searchPattern}
            onChange={(event) => setSearchPattern(event.target.value)}
          />
          <Styled.Button onClick={handleCloseSearch}>
            <Icon icon="xmark" />
          </Styled.Button>
          {error && <Styled.Error>{error.message}</Styled.Error>}
        </Styled.Search>
      )}
      {(isSearching || !cuisine) && results.some(() => true) && (
        <Styled.Options>
          {results.map(({ item }) => (
            <Styled.Option
              key={item.code}
              onClick={() => handleUpdateCuisine(item.cuisine)}
            >
              <Country code={item.code} label={item.cuisine} />
            </Styled.Option>
          ))}
        </Styled.Options>
      )}
    </Styled.Container>
  );
}

export default CuisinePicker;
