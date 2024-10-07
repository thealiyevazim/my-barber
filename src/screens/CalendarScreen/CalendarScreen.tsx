import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  AppText,
  MainTopTabNavigation,
  CalendarComponent,
  HistoryComponent,
} from '~components';
import { SafeAreaTemplate } from '~templates';

export const CalendarScreen: React.FC = () => {
  const [showSchedule, setShowSchedule] = useState<boolean>(true);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>('schedule');

  const handleSchedule = () => {
    setShowSchedule(true);
    setShowTable(false);
    setActiveButton('schedule');
  };

  const handleTable = () => {
    setShowSchedule(false);
    setShowTable(true);
    setActiveButton('table');
  };

  return (
    <SafeAreaTemplate padding>
      <AppText semibold style={styles.title}>
        Schedule
      </AppText>
      <View style={styles.topNavigationWrapper}>
        <MainTopTabNavigation
          activeButton={activeButton}
          schedulePress={handleSchedule}
          tablePress={handleTable}
        />
      </View>
      {showSchedule && <CalendarComponent />}
      {showTable && <HistoryComponent />}
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: '-20%',
  },
  title: {
    fontSize: 22,
    alignSelf: 'center',
  },
  topNavigationWrapper: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
});
