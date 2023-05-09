import { createRestyleComponent, createVariant, VariantProps } from '@shopify/restyle';
import React, { ComponentProps, PropsWithChildren, useCallback } from 'react';
import { Pressable, TouchableOpacity, TouchableWithoutFeedbackProps } from 'react-native';
import { Theme } from '~utils';
import { Container } from '../Container';

type BaseButtonProps = ComponentProps<typeof Container> & VariantProps<Theme, 'buttonVariants'>;

const BaseButton = createRestyleComponent<BaseButtonProps, Theme>(
  [createVariant({ themeKey: 'buttonVariants' })],
  Container,
);

export type ButtonOnPressType = () => void;

type ButtonMode = 'withFeedback' | 'withoutFeedback';

type Props = PropsWithChildren<
  ComponentProps<typeof BaseButton> &
    TouchableWithoutFeedbackProps & {
      onPress: ButtonOnPressType;
      buttonProps?: ComponentProps<typeof TouchableOpacity>;
      pressableProps?: ComponentProps<typeof Pressable>;
      mode?: ButtonMode; // default: withFeedback
    }
>;

export default ({
  onPress,
  disabled = false,
  buttonProps,
  pressableProps,
  children,
  mode = 'withFeedback',
  ...props
}: Props) => {
  const renderButtonChildren = useCallback(() => {
    return <BaseButton {...props}>{children}</BaseButton>;
  }, [props, children]);

  if (mode === 'withoutFeedback') {
    return (
      <Pressable {...pressableProps} disabled={disabled} {...{ onPress }}>
        {renderButtonChildren()}
      </Pressable>
    );
  }

  return (
    <TouchableOpacity {...{ onPress }} disabled={disabled} {...buttonProps}>
      {renderButtonChildren()}
    </TouchableOpacity>
  );
};
