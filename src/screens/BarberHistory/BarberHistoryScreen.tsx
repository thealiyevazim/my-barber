import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BooKDataModal, HeaderTitleArrow, OldBookedComponent } from '~components'
import { useNavigation } from '@react-navigation/native'

const BarberHistoryScreen = () => {

  const navigation = useNavigation()
  const [modalOldBooked, setModalOldBooked] = useState(false);


  const goBack = () => (
    navigation.goBack()
  )

  const openOldModal = () => {
    setModalOldBooked(true)
  }

  const closeOldModal = () => {
    setModalOldBooked(false)
  }

  return (
    <View style={styles.container}>
      <HeaderTitleArrow title='Tarix' onPress={goBack} style={styles.headerTitle} />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <OldBookedComponent onPress={openOldModal} />
      </ScrollView>
      <BooKDataModal isVisible={modalOldBooked} handleSubmit={closeOldModal} onPress={closeOldModal} />
    </View>
  )
}

export default BarberHistoryScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerTitle: {
    padding: 10
  },
  scroll: {
    paddingBottom: 20,
    paddingHorizontal: 15
  }
})