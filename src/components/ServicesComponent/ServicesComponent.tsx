import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '~utils';
import { AppText } from '../AppText/AppText';

interface Props {
  title: string;
}

export const ServicesComponent: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.servicesBox}></TouchableOpacity>
      <AppText style={styles.title}>{title}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 20,
  },
  servicesBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.appGray,
  },
  title: {
    marginTop: 6,
    fontSize: 14,
  },
});
