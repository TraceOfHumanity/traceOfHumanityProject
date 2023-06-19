import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles/index.scss";
import Header from "./components/header/Header";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Greeting from "./pages/Greeting/Greeting";
import Registration from "./pages/Registration/Registration";
import NotFound from "./pages/NotFound/NotFound";
import Authorization from "./pages/Authorization/Authorization";
import Library from "./pages/Library/Library";
import Author from "./pages/Author/Author";
import Management from "./pages/Admin/Admin";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const dispatch = useDispatch();
  // const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <div className="app">
      <Header />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
