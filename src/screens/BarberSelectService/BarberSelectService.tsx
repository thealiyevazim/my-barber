import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import { SafeAreaTemplate } from '~templates';
import { AppButton, AppText } from '~components';
import { GoBackIcon } from '~assets/icons';
import { colors } from '~utils';
import { useTypedNavigation } from '~shared';
import Checkbox from 'expo-checkbox';
import { barberService, useAppDispatch, useBarberServiceData } from '~store';

export const BarberSelectService: React.FC = () => {
  const { goBack } = useTypedNavigation();
  const dispatch = useAppDispatch();
  const barberServices = useBarberServiceData()
  const [checkedStates, setCheckedStates] = useState<boolean[]>(new Array(barberServices.length).fill(false));

  const handleGoBack = useCallback(() => {
    goBack();
  }, [goBack]);

  useEffect(() => {
    dispatch(barberService());
  }, [dispatch]);

  const handleCheckboxChange = (index: number) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCheckedStates(newCheckedStates);
  };

  const renderItem = ({ item, index }: { item: string, index: number }) => (
    <TouchableOpacity style={styles.serviceItem} activeOpacity={0.7}>
      <Checkbox
        value={checkedStates[index]}
        onValueChange={() => handleCheckboxChange(index)}
      />
      <AppText style={styles.serviceText}>{item}</AppText>
    </TouchableOpacity>
  );

  return (
    <SafeAreaTemplate>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.7} onPress={handleGoBack}>
          <GoBackIcon style={styles.icon} stroke={colors.appBlack} />
        </TouchableOpacity>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <AppText semibold style={styles.headerTitle}>Services</AppText>
        </View>
      </View>
      <View style={styles.container}>
        <FlatList
          data={barberServices}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.servicesContainer}
        />
        <AppButton title='Tasdiqlash' />
      </View>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 30,
  },
  headerTitle: {
    alignSelf: "center",
    fontSize: 22,
  },
  icon: {
    transform: [{ rotate: "180deg" }],
  },
  container: {
    flex: 1
  },
  servicesContainer: {
    marginTop: 20
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  serviceText: {
    marginLeft: 10,
    fontSize: 16,
  },
});
