import { z } from "zod";
import {
  COMMON_ERROR_MESSAGES,
  EMAIL_ERROR_MESSAGES,
  HEIGHT_ERROR_MESSAGES,
  ID_ERROR_MESSAGES,
  IMAGE_URL_ERROR_MESSAGES,
  NICKNAME_ERROR_MESSAGES,
  PASSWORD_ERROR_MESSAGES,
  POST_CONTENT_ERROR_MESSAGES,
  POST_TITLE_ERROR_MESSAGES,
  PROFILE_DESCRIPTION_ERROR_MESSAGES,
  RENTAL_PRICE_ERROR_MESSAGES,
  SHOES_SIZE_ERROR_MESSAGES,
  WEIGHT_ERROR_MESSAGES,
} from "./error-messages";
import { ID_REGEX, NICKNAME_REGEX, PASSWORD_REGEX } from "./regex";
import {
  HEIGHT_MAX_VALUE,
  HEIGHT_MIN_VALUE,
  ID_MAX_LENGTH,
  ID_MIN_LENGTH,
  NICKNAME_MAX_LENGTH,
  NICKNAME_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  POST_CONTENT_MAX_LENGTH,
  POST_CONTENT_MIN_LENGTH,
  POST_TITLE_MAX_LENGTH,
  POST_TITLE_MIN_LENGTH,
  PROFILE_DESCRIPTION_MAX_LENGTH,
  PROFILE_DESCRIPTION_MIN_LENGTH,
  RENTAL_MAX_VALUE,
  RENTAL_MIN_VALUE,
  SHOES_SIZE_MAX_VALUE,
  SHOES_SIZE_MIN_VALUE,
  WEIGHT_MAX_VALUE,
  WEIGHT_MIN_VALUE,
} from "@/constants";
import validator from "validator";

const checkPasswords = ({
  memberPassword,
  confirmPassword,
}: {
  memberPassword: string;
  confirmPassword: string;
}) => memberPassword === confirmPassword;

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
    memberName: nicknameSchmea,
    memberNickName: nicknameSchmea,
    memberEmail: emailSchema,
    memberPassword: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .refine(checkPasswords, {
    message: PASSWORD_ERROR_MESSAGES.NOT_CONFIRMED_ERROR,
    path: ["confirmPassword"],
  });

export const loginSchmea = z.object({
  memberEmail: emailSchema,
  memberPassword: passwordSchema,
});

const photoSchema = z
  .string({
    required_error: COMMON_ERROR_MESSAGES.REQUIRED_ERROR,
    invalid_type_error: COMMON_ERROR_MESSAGES.INVALID_TYPE_ERROR,
  })
  .refine(
    (photo) => validator.isURL(photo),
    IMAGE_URL_ERROR_MESSAGES.REGEX_ERROR
  );

const postTitleSchema = z
  .string({
    required_error: COMMON_ERROR_MESSAGES.REQUIRED_ERROR,
    invalid_type_error: COMMON_ERROR_MESSAGES.INVALID_TYPE_ERROR,
  })
  .min(
    POST_TITLE_MIN_LENGTH,
    POST_TITLE_ERROR_MESSAGES.MIN_LENGTH_ERROR(POST_TITLE_MIN_LENGTH)
  )
  .max(
    POST_TITLE_MAX_LENGTH,
    POST_TITLE_ERROR_MESSAGES.MAX_LENGTH_ERROR(POST_TITLE_MAX_LENGTH)
  );

const rentalPriceSchema = z.coerce
  .number({
    required_error: COMMON_ERROR_MESSAGES.REQUIRED_ERROR,
    invalid_type_error: COMMON_ERROR_MESSAGES.INVALID_TYPE_ERROR,
  })
  .min(
    RENTAL_MIN_VALUE,
    RENTAL_PRICE_ERROR_MESSAGES.MIN_PRICE_ERROR(RENTAL_MIN_VALUE)
  )
  .max(
    RENTAL_MAX_VALUE,
    RENTAL_PRICE_ERROR_MESSAGES.MAX_PRICE_ERROR(RENTAL_MAX_VALUE)
  );

const contentSchema = z
  .string({
    required_error: COMMON_ERROR_MESSAGES.REQUIRED_ERROR,
    invalid_type_error: COMMON_ERROR_MESSAGES.INVALID_TYPE_ERROR,
  })
  .min(
    POST_CONTENT_MIN_LENGTH,
    POST_CONTENT_ERROR_MESSAGES.MIN_LENGTH_ERROR(POST_CONTENT_MIN_LENGTH)
  )
  .max(
    POST_CONTENT_MAX_LENGTH,
    POST_CONTENT_ERROR_MESSAGES.MAX_LENGTH_ERROR(POST_CONTENT_MAX_LENGTH)
  );

export const rentalSchema = z.object({
  photo: photoSchema,
  title: postTitleSchema,
  price: rentalPriceSchema,
  content: contentSchema,
});

export const postSchema = z.object({
  photo: photoSchema,
  title: postTitleSchema,
  content: contentSchema,
});

export const weightSchema = z.coerce
  .number({
    required_error: COMMON_ERROR_MESSAGES.REQUIRED_ERROR,
    invalid_type_error: COMMON_ERROR_MESSAGES.INVALID_TYPE_ERROR,
  })
  .min(
    WEIGHT_MIN_VALUE,
    WEIGHT_ERROR_MESSAGES.MIN_LENGTH_ERROR(WEIGHT_MIN_VALUE)
  )
  .max(
    WEIGHT_MAX_VALUE,
    WEIGHT_ERROR_MESSAGES.MAX_LENGTH_ERROR(WEIGHT_MAX_VALUE)
  );
export const heightSchema = z.coerce
  .number({
    required_error: COMMON_ERROR_MESSAGES.REQUIRED_ERROR,
    invalid_type_error: COMMON_ERROR_MESSAGES.INVALID_TYPE_ERROR,
  })
  .min(
    HEIGHT_MIN_VALUE,
    HEIGHT_ERROR_MESSAGES.MIN_LENGTH_ERROR(HEIGHT_MIN_VALUE)
  )
  .max(
    HEIGHT_MAX_VALUE,
    HEIGHT_ERROR_MESSAGES.MAX_LENGTH_ERROR(HEIGHT_MAX_VALUE)
  );
export const shoesSizeSchema = z.coerce
  .number({
    required_error: COMMON_ERROR_MESSAGES.REQUIRED_ERROR,
    invalid_type_error: COMMON_ERROR_MESSAGES.INVALID_TYPE_ERROR,
  })
  .min(
    SHOES_SIZE_MIN_VALUE,
    SHOES_SIZE_ERROR_MESSAGES.MIN_LENGTH_ERROR(SHOES_SIZE_MIN_VALUE)
  )
  .max(
    SHOES_SIZE_MAX_VALUE,
    SHOES_SIZE_ERROR_MESSAGES.MAX_LENGTH_ERROR(SHOES_SIZE_MAX_VALUE)
  );

export const descriptionSchema = z
  .string()
  .min(
    PROFILE_DESCRIPTION_MIN_LENGTH,
    PROFILE_DESCRIPTION_ERROR_MESSAGES.MIN_LENGTH_ERROR(
      PROFILE_DESCRIPTION_MIN_LENGTH
    )
  )
  .max(
    PROFILE_DESCRIPTION_MAX_LENGTH,
    PROFILE_DESCRIPTION_ERROR_MESSAGES.MIN_LENGTH_ERROR(
      PROFILE_DESCRIPTION_MAX_LENGTH
    )
  );

export const locactionSchema = z.coerce
  .number({
    required_error: COMMON_ERROR_MESSAGES.REQUIRED_ERROR,
    invalid_type_error: COMMON_ERROR_MESSAGES.INVALID_TYPE_ERROR,
  })
  .transform((loc) => loc.toString());

export const profileSchema = z.object({
  photo: photoSchema,
  memberNickname: nicknameSchmea,
  weight: weightSchema,
  height: heightSchema,
  shoesSize: shoesSizeSchema,
  description: descriptionSchema,
  lat: locactionSchema,
  lng: locactionSchema,
});
