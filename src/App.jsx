import { Routes, Route } from "react-router-dom";

import Layout from "./features/Layout";
import Landing from "./features/Landing";
import RequireAuth from "./features/Auth/RequireAuth";
import RecipeList from "./features/RecipeList";
import RecipeEditor from "./features/RecipeEditor";
import RecipeDetails from "./features/RecipeDetails";
import Register from "./features/Auth/Register";
import Login from "./features/Auth/Login";
import NoMatch from "./features/NoMatch";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPen, faStar } from "@fortawesome/pro-solid-svg-icons";

library.add(faPen, faStar);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="/recipes" element={<RequireAuth />}>
          <Route index element={<RecipeList />} />
          <Route path=":recipeId" element={<RecipeDetails />} />
          <Route path="edit/:recipeId" element={<RecipeEditor />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
