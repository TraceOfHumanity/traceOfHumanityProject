import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {Header} from "components/Header";
import {MusicPlayer} from "components/MusicPlayer";
import {Popups} from "components/Popups";
import {useAppSelector} from "hooks/useReduxToolkit";
import {AboutAuthor} from "pages/AboutAuthor";
import {CreatePost} from "pages/CreatePost";
import {Dashboard} from "pages/Dashboard";
import {Home} from "pages/Home";
import {Library} from "pages/Library";
import {SimpleLoader} from "ui-elements/SimpleLoader";
import { useFirebase } from "hooks/useFirebase";

function App() {
  const {isLoading} = useAppSelector((state) => state.loader);
  const {getAllCategories} = useFirebase();
  getAllCategories();
  return (
    <div className="">
      {isLoading && <SimpleLoader />}
      <ToastContainer theme="dark" />
      <Header />
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />}>
          <Route path=":subtopic" element={<p>123</p>} />
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
