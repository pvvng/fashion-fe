export const COMMON_ERROR_MESSAGES = {
  REQUIRED_ERROR: "필수 입력 항목입니다.",
  INVALID_TYPE_ERROR: "올바른 타입이 아닙니다.",
} as const;

export const ID_ERROR_MESSAGES = {
  REGEX_ERROR: "ID는 영문자로 시작해야 하며, 영문과 숫자만 포함할 수 있습니다.",
  ALREADY_EXIST_ERROR: "이미 사용 중인 ID입니다.",
  MIN_LENGTH_ERROR: (min = 4) => `ID는 최소 ${min}자 이상이어야 합니다.`,
  MAX_LENGTH_ERROR: (max = 20) => `ID는 최대 ${max}자 이하이어야 합니다.`,
} as const;

export const PASSWORD_ERROR_MESSAGES = {
  REGEX_ERROR:
    "비밀번호는 영문자와 숫자 또는 특수문자(!@#$%^&*) 조합으로 구성되어야 하며, 공백을 포함할 수 없습니다.",
  NOT_CONFIRMED_ERROR: "비밀번호가 일치하지 않습니다.",
  MIN_LENGTH_ERROR: (min = 8) => `비밀번호는 최소 ${min}자 이상이어야 합니다.`,
  MAX_LENGTH_ERROR: (max = 20) => `비밀번호는 최대 ${max}자 이하이어야 합니다.`,
} as const;

export const NICKNAME_ERROR_MESSAGES = {
  REGEX_ERROR:
    "닉네임은 한글, 영문, 숫자만 포함할 수 있으며, 공백을 포함할 수 없습니다.",
  ALREADY_EXIST_ERROR: "이미 사용 중인 닉네임입니다.",
  MIN_LENGTH_ERROR: (min = 2) => `닉네임은 최소 ${min}자 이상이어야 합니다.`,
  MAX_LENGTH_ERROR: (max = 16) => `닉네임은 최대 ${max}자 이하이어야 합니다.`,
} as const;

export const EMAIL_ERROR_MESSAGES = {
  REGEX_ERROR: "올바른 이메일 형식이 아닙니다.",
};

export const IMAGE_URL_ERROR_MESSAGES = {
  REGEX_ERROR: "올바른 이미지 형식이 아닙니다.",
};

export const RENTAL_PRICE_ERROR_MESSAGES = {
  MIN_PRICE_ERROR: (min = 0) =>
    `렌탈 가격은 최소 ${min.toLocaleString("ko-KR")}원 입니다.`,
  MAX_PRICE_ERROR: (max = 10000000) =>
    `렌탈 가격은 최대 ${max.toLocaleString("ko-KR")}원 입니다.`,
};

export const POST_TITLE_ERROR_MESSAGES = {
  MIN_LENGTH_ERROR: (min = 4) => `제목은 최소 ${min}자 이상이어야 합니다.`,
  MAX_LENGTH_ERROR: (max = 20) => `제목은 최대 ${max}자 이하이어야 합니다.`,
};

export const POST_CONTENT_ERROR_MESSAGES = {
  MIN_LENGTH_ERROR: (min = 10) => `내용은 최소 ${min}자 이상이어야 합니다.`,
  MAX_LENGTH_ERROR: (max = 100) => `내용은 최대 ${max}자 이하이어야 합니다.`,
};

export const WEIGHT_ERROR_MESSAGES = {
  MIN_LENGTH_ERROR: (min = 20) => `몸무게는 최소 ${min}kg 이상이어야 합니다.`,
  MAX_LENGTH_ERROR: (max = 200) => `몸무게는 최대 ${max}kg 이하이어야 합니다.`,
} as const;

export const HEIGHT_ERROR_MESSAGES = {
  MIN_LENGTH_ERROR: (min = 100) => `키는 최소 ${min}cm 이상이어야 합니다.`,
  MAX_LENGTH_ERROR: (max = 250) => `키는 최대 ${max}cm 이하이어야 합니다.`,
} as const;

export const SHOES_SIZE_ERROR_MESSAGES = {
  MIN_LENGTH_ERROR: (min = 100) =>
    `신발 사이즈는 최소 ${min}cm 이상이어야 합니다.`,
  MAX_LENGTH_ERROR: (max = 350) =>
    `신발 사이즈는 최대 ${max}cm 이하이어야 합니다.`,
} as const;

export const PROFILE_DESCRIPTION_ERROR_MESSAGES = {
  MIN_LENGTH_ERROR: (min = 1) => `설명은 최소 ${min}자 이상이어야 합니다.`,
  MAX_LENGTH_ERROR: (max = 30) => `설명은 최대 ${max}자 이하이어야 합니다.`,
};
