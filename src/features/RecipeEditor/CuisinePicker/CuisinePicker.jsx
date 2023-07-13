import { useContext, useState } from "react";
import Fuse from "fuse.js";

import { countries } from "../../../config";

import { RecipeEditorContext } from "../RecipeEditor.context";

import Country from "../../../components/Country/Country";

function CuisinePicker() {
  const { editedRecipe, dispatch } = useContext(RecipeEditorContext);

  const [searchPattern, setSearchPattern] = useState("");

  const fuse = new Fuse(countries, {
    keys: ["code", "cuisine"],
    threshold: 0.3,
  });

  const results = fuse.search(searchPattern);

  results.length = 5;

  function renderSelectedCuisine() {
    if (editedRecipe.cuisine) {
      const country = countries.find(
        (country) => country.cuisine === editedRecipe.cuisine
      );
      return <Country code={country.code} label={country.cuisine} />;
    }
  }

  function handleUpdateCuisine(cuisine) {
    setSearchPattern("");
    dispatch({ type: "UPDATE_CUISINE", cuisine });
  }

  return (
    <div>
      <h3>Cuisine</h3>
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
