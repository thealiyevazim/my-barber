import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { colors } from '~utils';

interface PaginationProps {
  data: Array<any>;
  progressValue: SharedValue<number>;
}

const Pagination = ({ data, progressValue }: PaginationProps) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5,
      }}>
      {data.map((_, index) => (
        <PaginationDot
          key={index}
          index={index}
          progressValue={progressValue}
        />
      ))}
    </View>
  );
};

const PaginationDot = ({
  index,
  progressValue,
}: {
  index: number;
  progressValue: SharedValue<number>;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      progressValue.value,
      [index - 1, index, index + 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );

    const backgroundColor = interpolateColor(
      progressValue.value,
      [index - 1, index, index + 1],
      [colors.iconGray, colors.appBlack, colors.iconGray],
    );

    const width = interpolate(
      progressValue.value,
      [index - 1, index, index + 1],
      [8, 16, 8],
      Extrapolate.CLAMP,
    );

    return {
      backgroundColor,
      opacity,
      width,
    };
  });

  return <Animated.View style={[styles.dot, animatedStyle]} />;
};

const styles = StyleSheet.create({
  dot: {
    borderRadius: 4,
    height: 4,
    marginHorizontal: 4,
    width: 16,
  },
});

export default Pagination;
