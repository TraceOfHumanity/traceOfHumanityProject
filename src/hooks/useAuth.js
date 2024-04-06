import { auth } from "firebase.config";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

export const useAuth = () => {
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
    logoutUser,
  };
};
