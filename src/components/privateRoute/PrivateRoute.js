import React, { useLayoutEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import { DotLoader } from "react-spinners";
import { LoadingContext } from "../../context/LoadingContext";
import Loading from "../loading/Loading";

export default function PrivateRoute() {
  const { currentUser } = useContext(AuthContext);

  const { loading, setLoading } = useContext(LoadingContext);

  useLayoutEffect(() => {
    setLoading(true);
  }, []);

  if (currentUser) setLoading(false);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  if (loading)
    return <Loading />
  return (
    <>
      {currentUser ? <Home /> : <Login />}
    </>
  );
}
