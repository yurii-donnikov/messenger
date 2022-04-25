import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Path from "../../constants/Path";
import { isAuthenticated } from "../../Redux/auth/authSelectors";

function PublicRoute({ component: Component }) {
  const isRegistred = useSelector(isAuthenticated);
  return isRegistred ? <Navigate replace to={Path.MESSANGER} /> : <Component />;
}

export default PublicRoute;
