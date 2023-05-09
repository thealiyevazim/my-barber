import {
  BoxProps,
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  useTheme,
  VariantProps,
} from '@shopify/restyle';
import React, { PropsWithChildren } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Theme } from '~utils';

type BaseInputProps = PropsWithChildren<
  SpacingProps<Theme> & BoxProps<Theme> & VariantProps<Theme, 'inputVariants'>
>;
const BaseInput = createRestyleComponent<BaseInputProps, Theme>([
  spacing,
  createVariant({ themeKey: 'inputVariants' }),
]);

type Props = {
  value?: string;
  placeholder: string;
  onChangeText?: (text: string) => void;
} & BaseInputProps;

const Input = ({ value, onChangeText, placeholder, ...props }: Props) => {
  const { colors } = useTheme<Theme>();
  return (
    <BaseInput {...props}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        style={styles.input}
      />
    </BaseInput>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Input;
