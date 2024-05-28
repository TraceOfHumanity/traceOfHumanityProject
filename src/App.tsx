import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {Header} from "components/Header";
import {MusicPlayer} from "components/MusicPlayer";
import {Popups} from "components/Popups";
import {useFirebase} from "hooks/useFirebase";
import {useAppSelector} from "hooks/useReduxToolkit";
import {AboutAuthor} from "pages/AboutAuthor";
import {CreatePost} from "pages/CreatePost";
import {Dashboard} from "pages/Dashboard";
import {Home} from "pages/Home";
import {Library} from "pages/Library";
import {SimpleLoader} from "ui-elements/SimpleLoader";

function App() {
  const {isLoading} = useAppSelector((state) => state.loader);

  return (
    <div className="flex-auto flex flex-col h-screen w-screen overflow-y-auto container">
      {isLoading && <SimpleLoader />}
      <ToastContainer theme="dark" />
      <Header />
      <MusicPlayer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        {/* <Route path="/library" element={<Library />} > 
          <Route path=":subtopic" element={<p>123</p>} /> 
        </Route> */}
        <Route path="/aboutAuthor" element={<AboutAuthor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
      <Popups />
    </div>
  );
}

export default App;
