import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { HistoryData } from '../HistoryData/HistoryData';
import { useTypedNavigation } from '~shared';
import { Routes } from '~navigation';

const data = [1, 2, 3];

export const HistoryComponent: React.FC = ({}) => {
  const { navigate } = useTypedNavigation<'barber'>();

  const handleClientInfo = () => {
    navigate(Routes.bookedInfoScreen);
  };

  const renderItem = () => <HistoryData onPress={handleClientInfo} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
