import { z } from "zod";
import {
  COMMON_ERROR_MESSAGES,
  EMAIL_ERROR_MESSAGES,
  ID_ERROR_MESSAGES,
  NICKNAME_ERROR_MESSAGES,
  PASSWORD_ERROR_MESSAGES,
} from "./error-messages";
import { ID_REGEX, NICKNAME_REGEX, PASSWORD_REGEX } from "./regex";
import {
  ID_MAX_LENGTH,
  ID_MIN_LENGTH,
  NICKNAME_MAX_LENGTH,
  NICKNAME_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
} from "@/constants";
import validator from "validator";

const checkPasswords = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;

export const nicknameSchmea = z
  .string({
    required_error: COMMON_ERROR_MESSAGES.REQUIRED_ERROR,
    invalid_type_error: COMMON_ERROR_MESSAGES.INVALID_TYPE_ERROR,
  })
  .trim()
  .toLowerCase()
  .min(
    NICKNAME_MIN_LENGTH,
    NICKNAME_ERROR_MESSAGES.MIN_LENGTH_ERROR(NICKNAME_MIN_LENGTH)
  )
  .max(
    NICKNAME_MAX_LENGTH,
    NICKNAME_ERROR_MESSAGES.MAX_LENGTH_ERROR(NICKNAME_MAX_LENGTH)
  )
  .regex(NICKNAME_REGEX, NICKNAME_ERROR_MESSAGES.REGEX_ERROR);

export const idSchema = z
  .string({
    required_error: COMMON_ERROR_MESSAGES.REQUIRED_ERROR,
    invalid_type_error: COMMON_ERROR_MESSAGES.INVALID_TYPE_ERROR,
  })
  .min(ID_MIN_LENGTH, ID_ERROR_MESSAGES.MIN_LENGTH_ERROR(ID_MIN_LENGTH))
  .max(ID_MAX_LENGTH, ID_ERROR_MESSAGES.MAX_LENGTH_ERROR(ID_MAX_LENGTH))
  .regex(ID_REGEX, ID_ERROR_MESSAGES.REGEX_ERROR);

const emailSchema = z
  .string({
    required_error: COMMON_ERROR_MESSAGES.REQUIRED_ERROR,
    invalid_type_error: COMMON_ERROR_MESSAGES.INVALID_TYPE_ERROR,
  })
  .refine(
    (email) => validator.isEmail(email),
    EMAIL_ERROR_MESSAGES.REGEX_ERROR
  );

const passwordSchema = z
  .string({
    required_error: COMMON_ERROR_MESSAGES.REQUIRED_ERROR,
    invalid_type_error: COMMON_ERROR_MESSAGES.INVALID_TYPE_ERROR,
  })
  .min(
    PASSWORD_MIN_LENGTH,
    PASSWORD_ERROR_MESSAGES.MIN_LENGTH_ERROR(PASSWORD_MIN_LENGTH)
  )
  .max(
    PASSWORD_MAX_LENGTH,
    PASSWORD_ERROR_MESSAGES.MAX_LENGTH_ERROR(PASSWORD_MAX_LENGTH)
  )
  .regex(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGES.REGEX_ERROR);

export const confirmPasswordSchema = z.string({
  required_error: COMMON_ERROR_MESSAGES.REQUIRED_ERROR,
  invalid_type_error: COMMON_ERROR_MESSAGES.INVALID_TYPE_ERROR,
});

export const createAccountSchema = z
  .object({
    nickname: nicknameSchmea,
    id: idSchema,
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .refine(checkPasswords, {
    message: PASSWORD_ERROR_MESSAGES.NOT_CONFIRMED_ERROR,
    path: ["confirmPassword"],
  });

export const loginSchmea = z.object({
  id: idSchema,
  email: emailSchema,
  password: passwordSchema,
});
