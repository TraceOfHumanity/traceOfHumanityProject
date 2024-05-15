import {Header} from "components/Header";
import {Loader} from "components/Loader";
import {MusicPlayer} from "components/MusicPlayer";
import {Popups} from "components/Popups";
import { useAppSelector } from "hooks/useReduxToolkit";
import {AboutAuthor} from "pages/AboutAuthor";
import {Dashboard} from "pages/Dashboard";
import {Home} from "pages/Home";
import {Library} from "pages/Library";
import {Route, Routes} from "react-router-dom";
import {ToastContainer} from "react-toastify";

function App() {
  const {isLoading} = useAppSelector((state) => state.loader);
  return (
    <div className="">
      {isLoading && <Loader />}
      <ToastContainer theme="dark" />
      <Header />
      {/* <MusicPlayer /> */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/library" element={<Library />}>
          <Route path=":subtopic" element={<p>123</p>} />
        </Route>
        <Route path="/aboutAuthor" element={<AboutAuthor />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      {/* </Routes> */}
      <Popups />
    </div>
  );
}

export default App;
