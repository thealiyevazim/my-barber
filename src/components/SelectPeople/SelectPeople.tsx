import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '~utils';
import { AppText } from '~components/AppText';

interface SelectPeopleProps {
  addPerson: number;
  setAddPerson: (value: number) => void;
}

export const SelectPeople: React.FC<SelectPeopleProps> = ({ addPerson, setAddPerson }) => {

  const counterHandler = (value: string) => {
    if (value === "add" && addPerson < 1) {
      setAddPerson(addPerson + 1);
    } else if (value === "remove" && addPerson > 1) {
      setAddPerson(addPerson - 1);
    }
  };

  return (
    <View style={styles.peopleStyleBox}>
      <View style={styles.personBox}>
        <AppText style={styles.personCount}>{addPerson}</AppText>
        <AppText style={styles.personText}>person{addPerson > 1 ? 's' : ''}</AppText>
      </View>
      <View style={styles.calculationBox}>
        <TouchableOpacity
          style={[styles.button, addPerson === 1 && styles.disabledButton]}
          onPress={() => counterHandler("remove")}
          disabled={addPerson === 1}
        >
          <AppText style={styles.minusText}>-</AppText>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, addPerson === 5 && styles.disabledButton]}
          onPress={() => counterHandler("add")}
          disabled={addPerson === 5}
        >
          <AppText style={styles.minusText}>+</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  peopleStyleBox: {
    width: "100%",
    height: 52,
    borderRadius: 4,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    marginTop: 10,
  },
  personBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  personCount: {
    fontSize: 18,
    fontWeight: "500",
    color: colors.appBlack,
  },
  personText: {
    fontSize: 12,
    fontWeight: "500",
    color: colors.appGray,
  },
  button: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: colors.appBlack,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  disabledButton: {
    borderColor: colors.appGray,
    opacity: 0.5,
  },
  minusText: {
    fontSize: 15,
  },
  calculationBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
});

export default SelectPeople;
