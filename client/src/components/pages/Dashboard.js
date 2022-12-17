import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import AdminWelcome from "./adminPages/AdminWelcome";
import Aboutme from "./adminPages/Aboutme";
import Portfolio from "./adminPages/Portfolio";
import Resume from "./adminPages/Resume";

import { AuthContext } from "../../utils/auth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [_Target, _setTarget] = useState(<AdminWelcome />);

  function actionView(event) {
    const _targetPage = event.target.textContent;
    if (_targetPage === "About me") {
      _setTarget(<Aboutme />);
    }
    if (_targetPage === "Portfolio") {
      _setTarget(<Portfolio />);
    }
    if (_targetPage === "Resume") {
      _setTarget(<Resume />);
    }
    if (_targetPage === "Overview") {
      _setTarget(<AdminWelcome />);
    }
  }
  return (
    <>
      {user ? (
        <>
          <Sidebar actionView={actionView} />
          {_Target}
        </>
      ) : (
        <Navigate to="/admin" />
      )}
    </>
  );
}
