import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';


function AuthRoute() {
  const location = useLocation(); 
  console.log(location.pathname);

  return (
    <Outlet />
  );
}

export default AuthRoute;