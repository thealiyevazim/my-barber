import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { palette } from '~utils/theme'

const CounterPeopleComponent = () => {

  const [addPerson, setAddperson] = useState<number>(1)

  const counterHandler = (value: string) => {
    if (value === "add") {
      setAddperson((a) => a + 1)
    }
    else {
      if (addPerson > 1) {
        setAddperson((a) => a - 1)
      }
    }
  }

  return (
    <View style={styles.peopleStyleBox}>
      <View style={styles.personBox}>
        <Text style={styles.personCount}>{addPerson}</Text>
        <Text style={styles.personText}>person</Text>
      </View>
      <View style={styles.calculationBox}>
        <TouchableOpacity style={styles.minusButton} onPress={() => counterHandler("remove")}>
          <Text style={styles.minusText}>--</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.minusButton} onPress={() => counterHandler("add")}>
          <Text style={styles.minusText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CounterPeopleComponent

const styles = StyleSheet.create({
  peopleStyleBox: {
    width: "100%",
    height: 52,
    borderRadius: 4,
    backgroundColor: palette.backWhite,
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
    color: palette.black,
  },
  personText: {
    fontSize: 12,
    fontWeight: "500",
    color: palette.gray,
  },
  minusButton: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: palette.mainBlack,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
  },
  minusText: {
    fontSize: 15,
  },
  calculationBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 30,
  },
})