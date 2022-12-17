
import React from "react";
import { QUERY_USER } from "../../utils/queries";
import { useQuery } from "@apollo/client";
import Login from "./Login";
import Register from "./Register";

export default function Admin() {
  const {data } = useQuery(QUERY_USER);
  const getUser = data?.getUser;
  let makeupLogin = <Login />;
  let makeupRegister = <Register />;
  return (
    (getUser?.length >0)? makeupLogin : makeupRegister
  );
}