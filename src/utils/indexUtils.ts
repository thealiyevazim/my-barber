// timeout function
export const timeout = (ms: number) => new Promise(res => setTimeout(res, ms));

// validate email with regex
export const validateEmail = (email: string) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

//sleep function
export const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const addAlpha = (hex: string, alpha: number) =>
  `${hex}${Math.floor(alpha * 255)
    .toString(16)
    .padStart(2, '0')}`;

export function validateEmailOrID(value: string): {
  isEmail: boolean;
  isID: boolean;
} {
  const idRegex = /^\d+$/;

  const isEmail = validateEmail(value);
  const isID = idRegex.test(value);

  return { isEmail, isID };
}
