import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderTitleArrow } from '~components'
import { useNavigation } from '@react-navigation/native'

const Language = () => {

  const navigation = useNavigation()

  const goBack = () => (
    navigation.goBack()
  )

  return (
    <View style={styles.container}>
      <HeaderTitleArrow title='Language' onPress={goBack} />
    </View>
  )
}

export default Language

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})