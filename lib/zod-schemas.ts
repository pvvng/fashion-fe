import { z } from "zod";
import {
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

const checkPasswords = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;

export const joinUsSchema = z
  .object({
    nickname: z
      .string({
        required_error: NICKNAME_ERROR_MESSAGES.REQUIRED_ERROR,
        invalid_type_error: NICKNAME_ERROR_MESSAGES.INVALID_TYPE_ERROR,
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
      .regex(NICKNAME_REGEX, NICKNAME_ERROR_MESSAGES.REGEX_ERROR),
    id: z
      .string({
        required_error: ID_ERROR_MESSAGES.REQUIRED_ERROR,
        invalid_type_error: ID_ERROR_MESSAGES.INVALID_TYPE_ERROR,
      })
      .min(ID_MIN_LENGTH, ID_ERROR_MESSAGES.MIN_LENGTH_ERROR(ID_MIN_LENGTH))
      .max(ID_MAX_LENGTH, ID_ERROR_MESSAGES.MAX_LENGTH_ERROR(ID_MAX_LENGTH))
      .regex(ID_REGEX, ID_ERROR_MESSAGES.REGEX_ERROR),
    password: z
      .string({
        required_error: PASSWORD_ERROR_MESSAGES.REQUIRED_ERROR,
        invalid_type_error: PASSWORD_ERROR_MESSAGES.INVALID_TYPE_ERROR,
      })
      .min(
        PASSWORD_MIN_LENGTH,
        PASSWORD_ERROR_MESSAGES.MIN_LENGTH_ERROR(PASSWORD_MIN_LENGTH)
      )
      .max(
        PASSWORD_MAX_LENGTH,
        PASSWORD_ERROR_MESSAGES.MAX_LENGTH_ERROR(PASSWORD_MAX_LENGTH)
      )
      .regex(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGES.REGEX_ERROR),
    confirmPassword: z
      .string({
        required_error: PASSWORD_ERROR_MESSAGES.REQUIRED_ERROR,
        invalid_type_error: PASSWORD_ERROR_MESSAGES.INVALID_TYPE_ERROR,
      })
      .min(
        PASSWORD_MIN_LENGTH,
        PASSWORD_ERROR_MESSAGES.MIN_LENGTH_ERROR(PASSWORD_MIN_LENGTH)
      )
      .max(
        PASSWORD_MAX_LENGTH,
        PASSWORD_ERROR_MESSAGES.MAX_LENGTH_ERROR(PASSWORD_MAX_LENGTH)
      )
      .regex(PASSWORD_REGEX, PASSWORD_ERROR_MESSAGES.REGEX_ERROR),
  })
  .refine(checkPasswords, {
    message: PASSWORD_ERROR_MESSAGES.NOT_CONFIRMED_ERROR,
    path: ["confirmPassword"],
  });
