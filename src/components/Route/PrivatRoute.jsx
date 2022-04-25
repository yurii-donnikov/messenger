import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Path from "../../constants/Path";
import { isAuthenticated } from "../../Redux/auth/authSelectors";

function PrivatRoute({ component: Component }) {
  const isRegistred = useSelector(isAuthenticated);
  return isRegistred ? <Component /> : <Navigate replace to={Path.LOGIN} />;
}

export default PrivatRoute;
