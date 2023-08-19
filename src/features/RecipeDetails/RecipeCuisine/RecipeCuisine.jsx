import { countries } from "../../../config";
import Country from "../../../components/Country/Country";

function RecipeCuisine({ cuisine }) {
  const { code } = countries.find((country) => country.cuisine === cuisine);

  return <Country code={code} label={cuisine} />;
}

export default RecipeCuisine;
