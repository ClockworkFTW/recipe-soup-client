import { useState } from "react";

import Fuse from "fuse.js";

import {
  useCuisine,
  useRecipeEditorActions,
} from "../../../hooks/useRecipeEditor";
import { countries } from "../../../config";
import Country from "../../../components/Country/Country";

function CuisinePicker() {
  const cuisine = useCuisine();
  const { updateCuisine } = useRecipeEditorActions();

  const [searchPattern, setSearchPattern] = useState("");

  const fuse = new Fuse(countries, {
    keys: ["code", "cuisine"],
    threshold: 0.3,
  });

  const results = fuse.search(searchPattern);
  results.length = 5;

  function renderSelectedCuisine() {
    if (cuisine) {
      const country = countries.find((country) => country.cuisine === cuisine);
      return <Country code={country.code} label={country.cuisine} />;
    }
  }

  function handleUpdateCuisine(cuisine) {
    setSearchPattern("");
    updateCuisine(cuisine);
  }

  return (
    <div>
      {renderSelectedCuisine()}
      <input
        type="text"
        value={searchPattern}
        onChange={(event) => setSearchPattern(event.target.value)}
      />
      <ul>
        {results.map(({ item }) => (
          <li key={item.code} onClick={() => handleUpdateCuisine(item.cuisine)}>
            <Country code={item.code} label={item.cuisine} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CuisinePicker;
