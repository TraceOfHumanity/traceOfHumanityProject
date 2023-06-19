import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Greeting from "../pages/Greeting/Greeting";
import Library from "../pages/Library/Library";
import Author from "../pages/Author/Author";
import Management from "../pages/Admin/Admin";
import NotFound from "../pages/NotFound/NotFound";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Greeting />} />
        <Route path="/library" element={<Library />} />
        <Route path="/Author" element={<Author />} />
        <Route path="/management" element={<Management />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
