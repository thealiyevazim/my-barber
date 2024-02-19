import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { palette } from '~utils/theme';
import { Input } from '~components/Input';
const InactiveUnlock = require("../../../assets/images/InactiveUnlock.png");
const InactiveEye = require("../../../assets/images/InactiveEye.png");
const ActiveEye = require("../../../assets/images/ActiveEye.png");
const ActiveUnlock = require("../../../assets/images/ActiveUnlock.png");

const PasswordInput = () => {

const [isSecureEntry,setIsSecureEntry] = useState(true);
const [inputValue, setInputValue] = useState('');
const [imageSource, setImageSource] = useState(require("../../../assets/images/InactiveUnlock.png"));


const handleInputChange = (text:string) => {
  setInputValue(text);
  // Change the image source based on the input value
  if (Number(text) >= 0) {
    setImageSource(require("../../../assets/images/InactiveUnlock.png"));
  } else {
    setImageSource(require("../../../assets/images/ActiveUnlock.png"));
  }
};

  return (
    <View 
        style={styles.mainContainer}
      >
        <View
            style={styles.inputContainer}
        >
        <Image source={imageSource} style={styles.imageStyle}/>
        <Input  
        placeholder='********'
        borderWidth={0}  
        borderColor={'transparent'} 
        margin={0} 
        secureTextEntry={isSecureEntry}
        onChangeText={handleInputChange}
        style={styles.innerInputStyle}
        />
        </View>
        <TouchableOpacity  onPress={ ()=> { setIsSecureEntry((prev)=> !prev)}}>
            <Image source={isSecureEntry? InactiveEye :ActiveEye}  style={styles.imageStyle}/>
        </TouchableOpacity>
    </View>
  )
}

export default PasswordInput

const styles = StyleSheet.create({
  innerInputStyle:{
    width:'85%',
  },
  mainContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderColor:palette.hideGray,
    borderWidth:1,
    borderRadius:6,
    marginHorizontal:16,
    paddingRight:14,
  },
  inputContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  imageStyle:{
    width:22,
    height:22,
    margin:0,
  },
});