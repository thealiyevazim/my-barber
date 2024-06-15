import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppText } from '~components'
import GallerySplash from "~assets/images/gallerySplash.png";
import { colors } from '~utils';

interface Props {
  number?: string
}

export const GalleryComponent: React.FC<Props> = ({
  number,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.container}>
      <Image source={GallerySplash} style={styles.image} />
      <AppText semibold style={styles.number}>+3</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 170,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20
  },
  image: {
    width: "100%",
    height: 170,
    borderRadius: 8
  },
  number: {
    fontSize: 35,
    zIndex: 1,
    position: "absolute",
    color: colors.white
  }
})