import { auth } from "firebase.config";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { setIsLoginPopup } from "../redux/features/popupsSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();

  const loginUser = (e, email, password) => {
    e.preventDefault();
    // setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // setIsLoading(false);
        toast.success("Login success");
        // setEmail("");
        // setPassword("");
        dispatch(setIsLoginPopup(false));
      })
      .catch((error) => {
        toast.error(error.message);
        // setIsLoading(false);
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        toast.success("Login success");
        dispatch(setIsLoginPopup(false));
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout success");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return {
    loginUser,
    signInWithGoogle,
    logoutUser,
  };
};
