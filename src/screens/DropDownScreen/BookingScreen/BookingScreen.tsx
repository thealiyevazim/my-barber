import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { palette } from '~utils/theme';
import { BooKDataModal, HeaderTitleArrow, OldBookedComponent, TitleComponent } from '~components';
import { NewBookedComponent } from '~components/NewBooked';

const BookingScreen = () => {

  const [modalNewBooked, setModalNewBooked] = useState(false);
  const [modalOldBooked, setModalOldBooked] = useState(false);

  const openNewModal = () => {
    setModalNewBooked(true)
  }

  const closeNewModal = () => {
    setModalNewBooked(false)
  }

  const openOldModal = () => {
    setModalOldBooked(true)
  }

  const closeOldModal = () => {
    setModalOldBooked(false)
  }

  return (
    <View style={styles.container}>
      <HeaderTitleArrow title='Bronlar' style={styles.title} withoutArrow />
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
        <TitleComponent title='Faol' size />
        <NewBookedComponent onPress={openNewModal} />
        <TitleComponent title='Nofaol' size />
        <OldBookedComponent onPress={openOldModal} />
      </ScrollView>
      <BooKDataModal isVisible={modalNewBooked} handleSubmit={closeNewModal} onPress={closeNewModal} />
      <BooKDataModal isVisible={modalOldBooked} handleSubmit={closeOldModal} onPress={closeOldModal} />
    </View>
  )
}

export default BookingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: palette.labelGray,
  },
  title: {
    paddingLeft: 80
  },
  scroll: {
    paddingBottom: 20
  }
})