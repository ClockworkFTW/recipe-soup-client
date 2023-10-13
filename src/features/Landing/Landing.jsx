import { Navigate } from "react-router-dom";

import { useUser } from "../../hooks/useAuth";

function Landing() {
  const user = useUser();

  return user ? (
    <Navigate to="/recipes" replace={true} />
  ) : (
    <div>
      <h2>Landing</h2>
    </div>
  );
}

export default Landing;
