import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { AppText, BookedConfirm, NewBooked, OldBooked } from '~components';
import { SafeAreaTemplate } from '~templates';

export const BookedHistoryScreen: React.FC = () => {
  const [modalBooked, setModalBooked] = useState(false);

  const handleOpenNewModal = () => {
    setModalBooked(true);
  };

  const handleOpenOldModal = () => {
    setModalBooked(true);
  };

  const closeModal = () => {
    setModalBooked(false);
  };

  return (
    <SafeAreaTemplate>
      <AppText semibold style={styles.header}>
        Bronlar
      </AppText>
      <ScrollView
        style={{ marginBottom: -30 }}
        showsVerticalScrollIndicator={false}>
        <AppText style={styles.title}>Faol</AppText>
        <NewBooked onPress={handleOpenNewModal} />
        <AppText style={styles.title}>Nofaol</AppText>
        <OldBooked onPress={handleOpenOldModal} />
      </ScrollView>
      <BookedConfirm
        isVisible={modalBooked}
        onPress={closeModal}
        handleSubmit={closeModal}
        service={''}
        address={'Uchtepa tumani, Mahorat 23'}
        date={''}
        time={''}
        total={80000}
      />
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: 'center',
    fontSize: 22,
  },
  title: {
    marginTop: 24,
    marginBottom: 12,
  },
});
