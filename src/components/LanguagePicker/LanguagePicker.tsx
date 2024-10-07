import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

export const LanguagePicker: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={itemValue => setSelectedLanguage(itemValue)}
      style={{ width: '100%' }}>
      <Picker.Item label="O'zbek" value="uz" />
      <Picker.Item label="English" value="en" />
    </Picker>
  );
};
