import React from "react";
import { Container, Text } from "~components";
import { selectedUserTypeSelector, useAppSelector } from "~store";

const SignInScreen = () => {
  const userType = useAppSelector(selectedUserTypeSelector);
  return (
    <Container
      flex={1}
      alignItems={"center"}
      backgroundColor={"black"}
      justifyContent={"center"}
    >
      <Text>Please register as {userType.toUpperCase()}</Text>
    </Container>
  );
};

export default SignInScreen;
