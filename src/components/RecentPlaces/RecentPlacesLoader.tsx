import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { StyleSheet, View } from 'react-native';
import { colors, windowWidth } from '~utils';

export const RecentPlacesLoader: React.FC = () => (
  <View style={styles.loaderContainer}>
    {[...Array(3)].map((_, index) => (
      <ContentLoader
        key={index}
        speed={2}
        backgroundColor={colors.lightGray}
        foregroundColor={colors.appGray}
        style={styles.loaderItem}>
        <Rect x="10" y="10" rx="6" ry="6" width="20%" height="60" />
        <Rect x="30%" y="15" rx="4" ry="4" width="60%" height="13" />
        <Rect x="30%" y="40" rx="3" ry="3" width="50%" height="10" />
      </ContentLoader>
    ))}
  </View>
);

const styles = StyleSheet.create({
  loaderContainer: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  loaderItem: {
    borderRadius: 8,
    marginRight: 15,
    width: windowWidth / 1.5,
    height: 80,
    backgroundColor: colors.white,
  },
});
