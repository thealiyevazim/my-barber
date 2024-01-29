import React, { useState, useRef } from "react";
import { Animated, View, StyleSheet, TextInput, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons";

interface CustomInputProps {
  containerStyle?: any;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  error?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  containerStyle,
  placeholder,
  onChangeText,
  error,
  ...props
}) => {
  const [text, setText] = useState("");
  const labelPosition = useRef(new Animated.Value(text ? 1 : 0)).current;
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(props.secureTextEntry);

  const handleTextChange = (text: string) => {
    setText(text);
    if (onChangeText) {
      onChangeText(text);
    }
  };
  const handleFocuse = () => {
    setIsFocused(true);
    animatedLabel(1);
  };

  const animatedLabel = (toValue: any) => {
    Animated.timing(labelPosition, {
      toValue: toValue,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!text) {
      animatedLabel(0);
    }
  };

  const handleChangeText = (text: any) => {
    setText(text);
    if (onChangeText) {
      onChangeText(text);
    }
    if (text) {
      animatedLabel(1);
    } else {
      animatedLabel(isFocused ? 1 : 0);
    }
  };

  const labelStyle = {
    left: 10,
    top: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [17, 0],
    }),
    fontSize: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14],
    }),
    color: labelPosition.interpolate({
      inputRange: [0, 1],
      outputRange: ["gray", "#888"],
    }),
  };

  return (
    <View style={containerStyle}>
      <View style={[styles.innerContainer, error && { borderColor: "red" }]}>
        <Animated.Text style={[styles.label, labelStyle]}>
          {placeholder}
        </Animated.Text>
        <View style={styles.inputContainer}>
          <TextInput
            {...props}
            style={styles.input}
            onFocus={handleFocuse}
            onBlur={handleBlur}
            onChangeText={handleChangeText}
            value={text}
            textAlignVertical="center"
            textContentType={
              props.secureTextEntry ? "newPassword" : props.secureTextEntry
            }
            secureTextEntry={showPassword}
          />

          {props.secureTextEntry && !!text && (
            <View>
              <TouchableOpacity style={{width:24,height:24}} onPress={()=> setShowPassword(!showPassword)}>
                {!showPassword ? (
                  <Icon color={"gray"} name="eye-outline" size={24} />
                ) : (
                  <Icon name="eye-off-outline" color={"gray"} size={24} />
                )}
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  innerContainer: {
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 5,
    height: 60,
    justifyContent: "center",
  },
  label: {
    position: "absolute",
    color: "gray",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 50,
    marginTop: 10,
    paddingLeft: 10,
  },
  errorText: {
    marginTop: 5,
    fontSize: 14,
    color: "red",
  },
});
