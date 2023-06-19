import express from "express";
import mongoose from "mongoose";

import cors from "cors";

import {
  regiserValidation,
  loginValidation,
} from "./validations/validations.js";

import checkAuth from "./utils/checkAuth.js";

import * as UserController from "./controllers/UserController.js";
import handleValidationErrors from "./utils/handleValidationErrors.js";

mongoose
  .connect("")
  .then(() => console.log("DB connected"))
  .catch((error) => console.log("DB error", error));

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hi");
});

app.post(
  "/authorization/registration",
  regiserValidation,
  handleValidationErrors,
  UserController.register
);

app.post(
  "/authorization/login",
  loginValidation,
  handleValidationErrors,
  UserController.login
);

app.get("/authorization/me", checkAuth, UserController.getMe);

app.listen(2204, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("server Working");
});
