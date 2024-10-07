import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { View, StyleSheet } from 'react-native';
import { windowWidth, windowHeight, colors } from '~utils';

export const MainInfoCardLoader: React.FC = () => (
  <View style={styles.loaderContainer}>
    {[...Array(3)].map((_, index) => (
      <ContentLoader
        key={index}
        speed={2}
        backgroundColor={colors.lightGray}
        foregroundColor={colors.appGray}
        style={styles.loaderItem}>
        <Rect x="0" y="0" rx="6" ry="6" width="100%" height="50%" />
        <Rect
          x="10"
          y={`${windowHeight / 3 - 110}`}
          rx="4"
          ry="4"
          width="80%"
          height="15"
        />
        <Rect
          x="10"
          y={`${windowHeight / 3 - 85}`}
          rx="3"
          ry="3"
          width="60%"
          height="10"
        />
        <Rect
          x="10"
          y={`${windowHeight / 3 - 55}`}
          rx="4"
          ry="4"
          width="40%"
          height="35"
        />
      </ContentLoader>
    ))}
  </View>
);

const styles = StyleSheet.create({
  loaderContainer: {
    flexDirection: 'row',
    padding: 4,
  },
  loaderItem: {
    marginRight: 15,
    width: windowWidth / 2.2,
    height: windowHeight / 3,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 8,
  },
});
