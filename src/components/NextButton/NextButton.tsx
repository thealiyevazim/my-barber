import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Image,
  } from "react-native";
  import React from "react";
import { palette } from "~utils/theme";

interface ButtonProps  {
    btnTitle?: string,
    handleClick?: () => void,
}

const NextButton = ({btnTitle,handleClick }:ButtonProps) => {

    return (
        <TouchableOpacity  style={styles.nextButtonStyle} onPress={handleClick}>
            <Text style={styles.buttonText}>{btnTitle}</Text>
        </TouchableOpacity>
    )
}

  export default NextButton;

const styles = StyleSheet.create({
    nextButtonStyle:{
        width:328,
        height:52,
        borderRadius:8,
        backgroundColor:palette.mainBlack,
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        fontSize:20,
        fontWeight:'700',
        color:palette.mainWhite,
    },
})