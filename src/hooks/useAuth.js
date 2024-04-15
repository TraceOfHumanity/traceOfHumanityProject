import { auth } from "firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../redux/slices/authSlice";
import { setIsLoading } from "../redux/slices/loaderSlice";
import {
  setIsLoginPopup,
  setIsRegistrationPopup,
} from "../redux/slices/popupsSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const [displayName, setDisplayName] = useState("");

  const registerUser = (e, email, password, confirmPassword) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    dispatch(setIsLoading(true));
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        dispatch(setIsLoading(false));
        toast.success("Registration success");
        dispatch(setIsRegistrationPopup(false));
      })
      .catch((error) => {
        toast.error(error.message);
        dispatch(setIsLoading(false));
      });
  };

  const loginUser = (e, email, password) => {
    e.preventDefault();
    dispatch(setIsLoading(true));

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setIsLoading(false));
        toast.success("Login success");
        dispatch(setIsLoginPopup(false));
      })
      .catch((error) => {
        toast.error(error.message);
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
    dispatch(setIsLoading(true));
    sendPasswordResetEmail(auth, email)
      .then(() => {
        dispatch(setIsLoading(false));
        toast.success("Check your email for reset password link");
      })
      .catch((error) => {
        dispatch(setIsLoading(false));
        toast.error(error.message);
      });
  };

  const checkAuthorization = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName === null) {
          const u1 = user.email.split("@")[0];
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          // console.log(uName);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userId: user.uid,
          }),
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  };

  return {
    registerUser,
    loginUser,
    signInWithGoogle,
    logoutUser,
    resetPassword,
    checkAuthorization,
    displayName,
  };
};
