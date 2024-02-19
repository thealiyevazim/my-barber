import React from "react"
import { View ,Text,StyleSheet,Image,TouchableOpacity,StatusBar} from "react-native"
import { palette } from "~utils/theme";
import { useNavigation } from "@react-navigation/native";

// ------ IMG ------ //
import SecondTopImage from '../../assets/images/SecondScreenImage.png'
// ------ SVG ------ //
import RightBack from "~assets/icons/RightArrow";

const EnterenceScreenTwo = () => {
    const navigation = useNavigation();

    const goNextPage = () => {
        navigation.navigate("EnterenceScreenOne")
    };

    return (
        <View style={styles.mainContainer}>
               <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <View style={styles.topImageBox}>
                <Image source={SecondTopImage}  style={styles.topImageStyle}/>
            </View>
            <View style={styles.whiteCircleContainer}>
                    <View style={styles.indexBox}>
                        <View style={styles.oneIndex}></View>
                        <View style={styles.threeIndex}></View>
                        <View style={styles.twoIndex}></View>
                    </View>
                    <Text style={styles.bigText}>Malakali ustalar</Text>
                    <Text style={styles.paragrafText}>O'zingizni ko'rsatish uchun ishonchli ustalarga ishoning
shubhasiz o'chiring</Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonStyle} onPress={goNextPage}>
                            <RightBack color={palette.backWhite} width={28} height={28}/>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    )
};

export default EnterenceScreenTwo;

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: palette.backWhite,
        flexDirection:'column',
        paddingTop:45,
    },
    topImageBox:{
        alignItems:'center',
        marginVertical:10,
    },
    topImageStyle:{
        width:283,
        height:283,
        resizeMode:'cover',
    },
    whiteCircleContainer:{
        width:'100%',
        flex:1,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        backgroundColor:palette.backWhite,
        flexDirection:'column',
        padding:12,
    },
    indexBox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:5,
    },
    bigText:{
        fontSize:20,
        fontWeight:'600',
        color:palette.mainBlack,
        marginTop:25,
    },
    paragrafText:{
        fontSize:14,
        fontWeight:'400',
        color:palette.mainBlack,
        width:300,
        marginTop:15,
    },
    buttonContainer:{
        width:'100%',
        marginTop:250,
        alignItems:'flex-end'
    },
    buttonStyle:{
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:palette.mainBlack,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize:20,
        fontWeight:'700',
        color:palette.backWhite,
    },
    oneIndex:{
        width:14,
        height:4,
        borderRadius:6,
        backgroundColor:palette.personGray,
    },
    twoIndex:{
        width:14,
        height:4,
        borderRadius:6,
        backgroundColor:palette.personGray,
    },
    threeIndex:{
        width:24,
        height:4,
        borderRadius:6,
        backgroundColor:palette.mainBlack,
    },
});