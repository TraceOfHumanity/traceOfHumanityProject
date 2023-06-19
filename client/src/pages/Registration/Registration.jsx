import React from "react";
import styles from "./Registration.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { fetchRegister, selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Registration = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    // console.log(values);
    const data = await dispatch(fetchRegister(values));
    if (!data.payload) {
      return alert("Registration is possible by invitation only");
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
    <div className={styles.registration}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Full name:</label>
          <input {...register("fullName", { required: true })} />
          {errors.fullName && <span>This field is required</span>}
        </div>

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
        <p>Registration is possible by invitation only</p>
        <button
          type="submit"
          disabled={!isValid}
          className={isValid ? "" : styles.disabledButton}
        >
          Registration
        </button>
      </form>
    </div>
  );
};

export default Registration;
