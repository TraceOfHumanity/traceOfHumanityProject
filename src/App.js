import React from "react";

import { Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import { MusicPlayer } from "./components/MusicPlayer";
import { AboutAuthor } from "./pages/AboutAuthor";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";

function App() {
  return (
    <div className="app">
      <Header />
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/aboutAuthor" element={<AboutAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
