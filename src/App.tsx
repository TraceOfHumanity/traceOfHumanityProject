import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {Header} from "components/Header";
import {Posts} from "components/Library/Posts";
import {MusicPlayer} from "components/MusicPlayer";
import {Popups} from "components/Popups";
import {AboutAuthor} from "pages/AboutAuthor";
import {CreatePost} from "pages/CreatePost";
import {Dashboard} from "pages/Dashboard";
import {Home} from "pages/Home";
import {Library} from "pages/Library";
import {OnePost} from "pages/Post";

function App() {
  return (
    <div className="container flex h-screen w-screen flex-auto flex-col pb-2 md:pb-5">
      <ToastContainer theme="dark" />
      <Header />
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />}>
          <Route index element={<Posts />} />
          <Route path=":post" element={<OnePost />} />
        </Route>
        <Route path="/aboutAuthor" element={<AboutAuthor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:post" element={<OnePost />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
      <Popups />
    </div>
  );
}

export default App;
