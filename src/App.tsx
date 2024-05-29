import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {Header} from "components/Header";
import {Posts} from "components/Library/Posts";
import {MusicPlayer} from "components/MusicPlayer";
import {Popups} from "components/Popups";
import {useAppSelector} from "hooks/useReduxToolkit";
import {AboutAuthor} from "pages/AboutAuthor";
import {CreatePost} from "pages/CreatePost";
import {Dashboard} from "pages/Dashboard";
import {Home} from "pages/Home";
import {Library} from "pages/Library";
import {Post} from "pages/Post";
import {SimpleLoader} from "ui-elements/SimpleLoader";

function App() {
  const {isLoading} = useAppSelector((state) => state.loader);

  return (
    <div className="container flex h-screen w-screen flex-auto flex-col overflow-y-auto">
      {isLoading && <SimpleLoader />}
      <ToastContainer theme="dark" />
      <Header />
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />}>
          <Route index element={<Posts />} />
          <Route path=":post" element={<Post />} />
        </Route>
        <Route path="/aboutAuthor" element={<AboutAuthor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
      <Popups />
    </div>
  );
}

export default App;
