import React from "react";
import { Image } from "react-native";
import { Dimensions } from "react-native";
import { Container, Pressable, Text } from "~components";

const windowHalf = Dimensions.get("window").height / 2;

type Props = {
  onClientPress: () => void;
  onBarberPress: () => void;
};

export const SelectRoleTemplate: React.FC<Props> = ({
  onBarberPress,
  onClientPress,
}) => {
  return (
    <Container
      flex={1}
      paddingTop={30}
      paddingHorizontal={15}
      justifyContent={"space-around"}
    >
      <Container alignItems={"center"}>
        <Image
          style={{ marginTop: 20 }}
          source={require("../../assets/images/welcome-logo-white.png")}
        />
      </Container>
      <Container height={windowHalf - 50} justifyContent={"space-evenly"}>
        <Container>
          <Text bold variant={"h1"} marginBottom={10}>
            Hush kelibsiz!
          </Text>
          <Text variant={"h4"} color={"gray"}>
            Kim bo’lib davom etishingizni belgilang.
          </Text>
        </Container>
        <Container>
          <Pressable onPress={onClientPress} variant={"defaultWhite"}>
            <Text color={"defaultBlue"} bold variant={"h2"}>
              Mijoz
            </Text>
          </Pressable>
          <Pressable
            onPress={onBarberPress}
            variant={"defaultBlue"}
            marginTop={25}
          >
            <Text bold variant={"h2"}>
              Barber
            </Text>
          </Pressable>
        </Container>
      </Container>
    </Container>
  );
};
