import { body } from "express-validator";

export const loginValidation = [
  body("email", "Неправильний формат пошти").isEmail(),
  body("password", "Пароль повинн бути не менше 5 символів").isLength({
    min: 5,
  }),
];

export const regiserValidation = [
  body("email", "Неправильний формат пошти").isEmail(),
  body("password", "Пароль повинн бути не менше 5 символів").isLength({
    min: 5,
  }),
  body("fullName", "Укажіть ім'я не менше 3 символів").isLength({ min: 3 }),
];

// export const postCreateValidation = [
//   body("title", "введіть назву статті").isLength({ min: 3 }).isString(),
//   body("text", "введіть текст статті").isLength({ min: 10 }).isString(),
//   body("tags", "неправильний формат тегів, укажіть масив").optional().isArray(),
//   body("imageUrl", "Неправильне полимлання на зображення")
//     .optional()
//     .isString(),
// ];
