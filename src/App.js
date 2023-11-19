import React from "react";
import { Earth, Header, MainMenu } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <MainMenu /> */}
      {/* <Earth /> */}
    </div>
  );
}

export default App;
