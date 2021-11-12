import { body } from "express-validator"

const postValidation = [
    body("email")
        .trim()
        .notEmpty().withMessage("Email field is required")
        .isEmail().withMessage("Invalid email address"),
    body("password")
        .trim()
        .notEmpty().withMessage("Password Field is required")
        .isLength({ min: 8, }).withMessage("password must be greater than 8 characters"),
    body("name")
        .trim()
        .notEmpty().withMessage("name field is required")
        .isLength({ min: 6 }).withMessage("must be greater than 6 characters")
];

const patchValidation = [
    body("email")
        .trim()
        .notEmpty().withMessage("Email field is required")
        .isEmail().withMessage("Invalid email address"),
    body("password")
        .trim()
        .notEmpty().withMessage("Password Field is required")
        .isLength({ min: 8, }).withMessage("password must be greater than 8 characters"),
    body("name")
        .trim()
        .notEmpty().withMessage("name field is required")
        .isLength({ min: 6 }).withMessage("must be greater than 6 characters")
];

export { postValidation, patchValidation };