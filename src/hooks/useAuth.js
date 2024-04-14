import { auth } from "firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { setIsLoading } from "../redux/slices/loaderSlice";
import {
  setIsLoginPopup,
  setIsRegistrationPopup,
} from "../redux/slices/popupsSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();

  const registerUser = (e, email, password, confirmPassword) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    // setIsLoading(true);
    dispatch(setIsLoading(true));
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // setIsLoading(false);
        dispatch(setIsLoading(false));
        toast.success("Registration success");
        // setEmail("");
        // setPassword("");
        // setConfirmPassword("");
        dispatch(setIsRegistrationPopup(false));
        // dispatch(setIsLoginPopup(true));
      })
      .catch((error) => {
        toast.error(error.message);
        // setIsLoading(false);
        dispatch(setIsLoading(false));
      });
  };

  const loginUser = (e, email, password) => {
    e.preventDefault();
    // setIsLoading(true);
    dispatch(setIsLoading(true));

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // setIsLoading(false);
        dispatch(setIsLoading(false));
        toast.success("Login success");
        // setEmail("");
        // setPassword("");
        dispatch(setIsLoginPopup(false));
      })
      .catch((error) => {
        toast.error(error.message);
        // setIsLoading(false);
        dispatch(setIsLoading(false));
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

  const resetPassword = (e, email) => {
    e.preventDefault();
    // setIsLoading(true);
    dispatch(setIsLoading(true));
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // setIsLoading(false);
        dispatch(setIsLoading(false));
        toast.success("Check your email for reset password link");
      })
      .catch((error) => {
        // setIsLoading(false);
        dispatch(setIsLoading(false));
        toast.error(error.message);
      });
  };

  return {
    registerUser,
    loginUser,
    signInWithGoogle,
    logoutUser,
    resetPassword,
  };
};
