import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import Messanger from "../../Pages/Messanger/Messanger";
import Path from "../../constants/Path";
import PublicRoute from "./PublicRoute";
import PrivatRoute from "./PrivatRoute";
import Container from "../container/Container";

function MainRoute() {
  return (
    <Container>
      <Routes>
        <Route path={Path.LOGIN} element={<PublicRoute component={Login} />} />
        <Route
          path={Path.MESSANGER}
          element={<PrivatRoute component={Messanger} />}
        />
        <Route path="/" element={<Navigate replace to={Path.LOGIN} />} />
      </Routes>
    </Container>
  );
}

export default MainRoute;
