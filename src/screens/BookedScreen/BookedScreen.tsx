import React from 'react';
import { Image, StyleSheet } from 'react-native';
import BookedSplash from '~assets/images/bookedSplash.png';
import { BookedInfoComponent } from '~components';
import { SafeAreaTemplate } from '~templates';

export const BookedScreen: React.FC = () => {
  return (
    <SafeAreaTemplate isDark goBack>
      <Image source={BookedSplash} style={styles.splash} />
      <BookedInfoComponent />
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  splash: {
    position: 'absolute',
    width: '120%',
    zIndex: -1,
  },
});
