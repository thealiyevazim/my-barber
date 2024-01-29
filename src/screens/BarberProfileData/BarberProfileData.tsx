import React from "react"
import { View,Text,StyleSheet,Image,TouchableOpacity,StatusBar} from "react-native"
import { palette } from "~utils/theme";
import { useNavigation } from "@react-navigation/native";
// ----- IMG ----- //
import ProfileIMage from '../../assets/images/ProfileRoundedImage.png';
// ------ SVG ------ //
import UserIcon from "~assets/icons/UserIcon";
import LeftBack from "~assets/icons/ArrowLeft";
import LanguageIcon from "~assets/icons/LanguageIcon";
import HistorySvgIcon from "~assets/icons/HistorySvg";
import LogOutIcon from "~assets/icons/LogOutIcon";
import RightBack from "~assets/icons/RightArrow";

const BarberProfileData = () => {
    const navigation = useNavigation();

    const goNextPage = () => {
        navigation.navigate("languageScreen")
    };

    const goEditProfil = () => {
        navigation.navigate("editProfileData")
    }

    return (
        <View style={styles.mainContainer}>
             <StatusBar backgroundColor="transparent" barStyle="white-content" />
            <View style={styles.topImageContainer}>
                <View style={styles.imageContainer}>
                    <Image source={ProfileIMage}  style={styles.profileImageStyle}/>
                </View>
                <Text style={styles.bigText}>Azimjon Aliyev</Text>
                <Text style={styles.middleGrayText}>92 mijoz</Text>
            </View>
            <View style={styles.whiteCircleContainer}>
                <TouchableOpacity style={styles.topUserCOntainer} onPress={goEditProfil}>
                    {/* svg */}
                    <View style={styles.leftIconBox}>
                    <UserIcon />
                    <Text style={styles.iconText}>Profilni tahrirlash</Text>
                    </View>
                    {/* svg */}
                    <RightBack color="#181818" width={20} height={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topUserCOntainer} onPress={goNextPage}>
                    {/* svg */}
                    <View style={styles.leftIconBox}>
                    <LanguageIcon />
                    <Text style={styles.iconText}>Til</Text>
                    </View>
                    {/* svg */}
                    <RightBack color="#181818" width={20} height={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topUserCOntainer}>
                    {/* svg */}
                    <View style={styles.leftIconBox}>
                    <HistorySvgIcon />
                    <Text style={styles.iconText}>Tarix</Text>
                    </View>
                    {/* svg */}
                    <RightBack color={palette.mainBlack} width={20} height={20}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.topUserCOntainer}>
                    {/* svg */}
                    <View style={styles.leftIconBox}>
                    <LogOutIcon />
                    <Text style={styles.iconText}>Akkauntdan Chiqish</Text>
                    </View>
                    {/* svg */}
                    <View></View>
                </TouchableOpacity>

               
            </View>
        </View>
    )
}

export default BarberProfileData ;

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:palette.mainBlack,
        flexDirection:'column',
        paddingTop:45,
    },
    whiteCircleContainer:{
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        backgroundColor:palette.white,
        flex:1,
        marginTop:32,
        paddingHorizontal:16,
        paddingTop:32,
        gap:24,
    },
    topImageContainer:{
        flexDirection:'column',
        alignItems:'flex-start',
        gap:8,
        paddingHorizontal:16,
    },
    imageContainer:{
        width:79,
        height:79,
        borderRadius:50,
        borderWidth:1,
        borderColor:palette.lightGray,
    },
    bigText:{
        color:palette.mainWhite,
        fontSize:22,
        fontWeight:'400',
    },
    middleGrayText:{
        fontSize:14,
        fontWeight:'400',
        color:palette.labelGray,
    },
    profileImageStyle:{
        width:79,
        height:79,
        borderRadius:50,
    },
    
    topUserCOntainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },  
    leftIconBox:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    iconText:{
        fontSize:18,
        fontWeight:'400',
        color:palette.mainBlack,

    },
});