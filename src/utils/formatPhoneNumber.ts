export const formatPhoneNumber = (value: string) => {
  const cleanedValue = value.replace(/\D/g, "");

  let formattedValue =
    cleanedValue.slice(0, 2) +
    " " +
    cleanedValue.slice(2, 5) +
    " " +
    cleanedValue.slice(5, 7) +
    " " +
    cleanedValue.slice(7, 9);

  return formattedValue.trim();
};

export const formatSecuredPhoneNumber = (phoneNumber: string) => {
  if (!phoneNumber) return "";

  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

  const formattedNumber = cleanedPhoneNumber.replace(
    /^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/,
    "+$1 $2 ** *** $5"
  );

  return formattedNumber;
};
