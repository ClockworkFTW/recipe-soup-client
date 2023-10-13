import { Routes, Route } from "react-router-dom";

import Layout from "./features/Layout";
import Landing from "./features/Landing";
import Auth from "./features/Auth";
import Login from "./features/Auth/Login";
import Register from "./features/Auth/Register";
import ForgotPassword from "./features/Auth/ForgotPassword";
import ResetPassword from "./features/Auth/ResetPassword";
import ProtectedRoute from "./features/Auth/ProtectedRoute";
import RecipeList from "./features/RecipeList";
import RecipeEditor from "./features/RecipeEditor";
import RecipeDetails from "./features/RecipeDetails";
import Profile from "./features/Profile";
import NoMatch from "./features/NoMatch";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
        <Route path="/recipes" element={<ProtectedRoute />}>
          <Route index element={<RecipeList />} />
          <Route path=":recipeId" element={<RecipeDetails />} />
          <Route path="edit/:recipeId" element={<RecipeEditor />} />
        </Route>
        <Route path="/profile" element={<ProtectedRoute />}>
          <Route path=":userId" element={<Profile />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
