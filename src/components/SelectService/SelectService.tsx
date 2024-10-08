import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import { AppText } from '../AppText/AppText';
import { colors } from '~utils';
import { FONT_TYPES } from '~assets/fonts/types';

interface Option {
  label: string;
  value: string;
  price: string;
}

interface SelectServiceProps {
  selected: string[];
  setSelected: (selected: string[]) => void;
  data: Option[];
}

export const SelectService: React.FC<SelectServiceProps> = ({
  selected,
  setSelected,
  data,
}) => {
  // const [selected, setSelected] = useState<string[]>([]);

  function calculateSelectedTotalPrice(
    data: Option[],
    selected: string[],
  ): number {
    return data
      .filter(data => selected.includes(data.value))
      .reduce((total, data) => total + parseInt(data.price), 0);
  }

  const totalPrice = calculateSelectedTotalPrice(data, selected);

  const handleChange = (item: string[]) => {
    setSelected(item);
  };

  const renderItem = ({ label, price }: Option) => {
    return (
      <View style={styles.optionItem}>
        <AppText style={styles.labelStyle}>{label}</AppText>
        <AppText style={styles.priceStyle}>{price}</AppText>
      </View>
    );
  };

  const renderSelectedItem = ({ label, price }: Option) => {
    return (
      <View style={styles.selectedItem}>
        <AppText>{`${label} - ${price}`}</AppText>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        itemAccessibilityLabelField="label"
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Select service"
        value={selected}
        onChange={handleChange}
        selectedStyle={styles.selectedStyle}
        renderItem={renderItem}
        renderSelectedItem={renderSelectedItem}
        showsVerticalScrollIndicator={false}
        maxHeight={200}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: 160,
  },
  dropdown: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  placeholderStyle: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FONT_TYPES.MEDIUM,
  },

  selectedStyle: {
    borderRadius: 8,
  },
  optionItem: {
    paddingHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 28,
    borderRadius: 4,
  },
  labelStyle: {
    color: colors.appBlack,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  priceStyle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.appBlack,
  },
  selectedItem: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.appGray,
    marginRight: 5,
    marginTop: 5,
  },
});
