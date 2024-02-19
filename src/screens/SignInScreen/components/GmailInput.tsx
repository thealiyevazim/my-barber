import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useState } from 'react';
import { Container, Input } from "~components";
import { palette } from '~utils/theme';
import { spacing } from '@shopify/restyle';
const ActiveMail = require("../../../assets/images/ActiveMailImage.png");
const ChekingImage = require("../../../assets/images/chekImage.png");
const InaActiveMail = require("../../../assets/images/InActiveMail.png")
import InnerContainer from '~screens/SignInScreen/components/PasswordInput';



const GmailInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [showImage, setShowImage] = useState(true);
  const [imageSource, setImageSource] = useState(require("../../../assets/images/InActiveMail.png"));

  const handleInputChange = (text: string) => {
    setInputValue(text);
    // Check if the input value ends with "@gmail.com" and there's no text after it
    if (text.endsWith('@gmail.com') ){
      setImageSource(require("../../../assets/images/ActiveMailImage.png"));
      setInputValue(text.slice(0, text.indexOf('@gmail.com') + '@gmail.com'.length))
    } else {
      setImageSource(require("../../../assets/images/InActiveMail.png"));
    }
  };

  return (
    <View
       style={styles.mainContainer}  >
        <View 
            style={styles.inputContainer}
        >
              {showImage && <Image source={imageSource} style={styles.imageOneStyle} />}
        <Input 
          placeholder='name_examle@gmail.com'
          borderWidth={0}
          borderColor={'transparent'}
          margin={0}
          value={inputValue}
          onChangeText={handleInputChange}
          secureTextEntry={false}  
          style={styles.innerInputStyle}        
            />
        </View>  
        <Image source={ ChekingImage} style={styles.imageTwoStyle}/>

    </View>
  )
}


export default GmailInput

const styles = StyleSheet.create({
   mainContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderColor:palette.hideGray,
    borderWidth:1,
    margin:16,
    paddingHorizontal:16,
    borderRadius:6,
   },
   inputContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
   },
   imageOneStyle:{
    width:22,
    height:22,
    margin:0,
   },
   imageTwoStyle:{
    display:'none',
   },
   innerInputStyle:{
    width:'94%'
   },
})