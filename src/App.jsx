import { Routes, Route } from "react-router-dom";

import Layout from "./features/Layout";
import Landing from "./features/Landing";
import RecipeList from "./features/RecipeList";
import RecipeEditor from "./features/RecipeEditor";
import RecipeDetails from "./features/RecipeDetails";
import Register from "./features/Auth/Register";
import Login from "./features/Auth/Login";
import NoMatch from "./features/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="recipes" element={<RecipeList />} />
        <Route path="recipe/:recipeId" element={<RecipeDetails />} />
        <Route path="recipe/edit/:recipeId" element={<RecipeEditor />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
