import React from "react";
import { Header } from "components";
import { useLocation } from "react-router-dom";
import * as ROUTES from "constants/routes";
import Logo from "../logo.svg";

export function HeaderContainer({ children }) {
  const location = useLocation();
  const route = location.pathname.split("/")[1];

  return (
    <Header src="home-bg">
      <Header.Frame>
        <Header.Logo
          to={ROUTES.HOME}
          alt="Netflix"
          src={Logo}
        />

        {route === "" && (
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        )}
      </Header.Frame>
      {children}
    </Header>
  );
}
