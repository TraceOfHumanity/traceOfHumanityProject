import React from "react";
import styles from "../Registration/Registration.module.scss";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth.js";

const Authorization = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    // console.log(values);
    const data = await dispatch(fetchAuth(values));
    if (!data.payload) {
      return alert("Login failed");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };
  console.log("isAuth", isAuth);

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <div className={`${styles.authorization} ${styles.registration}`}>
      <h2>Authorization</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input {...register("email", { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>This field is required</span>}
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={isValid ? "" : styles.disabledButton}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default Authorization;
