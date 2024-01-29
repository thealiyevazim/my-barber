import { Touchable, View } from "react-native";
import React, { ComponentProps,PropsWithChildren } from "react";
import { Text } from "~components";
import { Container, Pressable } from "~components";
import { palette } from "~utils/theme";

type IProps = {
  text: string;
  textColor: string;
  fontWeight: "bold"|"regular";
  onPress: () => void;
};
type IButton = PropsWithChildren<ComponentProps<typeof Container> & IProps>;

const Button = ({
  text,
  backgroundColor,
  textColor,
  fontWeight="bold",
  onPress,
  ...rest
}: IButton) => {
  return (
    <Pressable
      onPress={onPress}
      {...rest}
    >
      <Text style={{ color: textColor,alignSelf:'center' }} bold={fontWeight==="bold"} regular={fontWeight==="regular"} 
      variant={"h2"}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
