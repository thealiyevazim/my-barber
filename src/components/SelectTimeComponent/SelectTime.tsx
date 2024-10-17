import React from 'react';
import {
  StyleSheet,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { FONT_TYPES } from '~assets/fonts/types';
import { AppText } from '../AppText/AppText';
import { colors } from '~utils';

interface Option {
  label: string;
  value: string;
}

interface SelectTimeProps {
  selectTime: string;
  setSelectTime: (selected: string) => void;
  data: Option[];
  style?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
}

export const SelectTime: React.FC<SelectTimeProps> = ({
  selectTime,
  setSelectTime,
  data,
  style,
  placeholderStyle,
  selectedTextStyle,
}) => {
  const handleChange = (item: Option) => {
    if (item.value) {
      setSelectTime(item.value);
    }
  };

  const renderItem = (item: Option) => {
    return (
      <View style={styles.item}>
        <AppText style={styles.textStyle}>{item.label}</AppText>
      </View>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={'Vaqtni tanlash'}
        value={selectTime}
        onChange={handleChange}
        renderItem={renderItem}
        itemContainerStyle={styles.itemContainerStyle}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
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
  selectedTextStyle: {
    fontSize: 18,
    fontWeight: '500',
    fontFamily: FONT_TYPES.MEDIUM,
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  textStyle: {
    fontSize: 16,
    fontWeight: '400',
  },
  itemContainerStyle: {
    paddingVertical: 5,
  },
});
