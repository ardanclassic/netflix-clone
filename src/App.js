import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "constants/routes";
import { HomePage, Browse, Signin, Signup } from "pages";
import { IsUserRedirect, ProtectedRoute } from "helpers/routes";
import UseAuthListener from "hooks/use-auth-listener";

export default function App() {
  const user = UseAuthListener();
  
  return (
    <Router>
      <IsUserRedirect
        exact
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        exact
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
      >
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute exact user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        exact
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
      >
        <HomePage />
      </IsUserRedirect>
    </Router>
  );
}
