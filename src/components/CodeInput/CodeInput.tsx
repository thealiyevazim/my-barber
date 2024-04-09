import React from "react";
import { StyleSheet } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { colors } from "~utils";
import { AppText } from "../AppText";

type Props = {
  value: string;
  cellCount?: number;
  onChangeText: (text: string) => void;
};

export const CodeInput: React.FC<Props> = ({
  value,
  onChangeText,
  cellCount = 6,
}) => {
  const ref = useBlurOnFulfill({ value, cellCount });

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeText,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      cellCount={6}
      keyboardType="number-pad"
      onChangeText={onChangeText}
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <AppText
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </AppText>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: colors.appGray,
    borderRadius: 14,
    lineHeight: 50,
    textAlign: "center",
    marginRight: 2,
    marginLeft: 2,
  },
  focusCell: {
    marginRight: 2,
    marginLeft: 2,
    borderColor: colors.appBlack,
  },
});
