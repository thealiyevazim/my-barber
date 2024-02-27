import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from "react-native"
import { palette } from "~utils/theme";
import { useNavigation } from "@react-navigation/native";

// ------ IMG ------ // 
import BlueIconImage from '../../assets/images/barberNewBlackImage.png'
import { AuthenticationRouteList } from "~navigation";

const OpenScreen: React.FC = () => {
    const navigation = useNavigation<AuthenticationRouteList>();

    const goNextPage = () => {
        navigation.navigate("EnterenceScreenThree")
    };

    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor="transparent" barStyle="dark-content" />
            <View style={styles.imageContainer}>
                <Image source={BlueIconImage} style={styles.iconImageStyle} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.middleCenterText}>
                    Select the language
                    of the application
                </Text>
            </View>

            <View style={styles.languageBox}>
                <TouchableOpacity style={styles.languageButton} onPress={goNextPage}>
                    <Text style={styles.buttonText}>UZ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.languageButton} onPress={goNextPage}>
                    <Text style={styles.buttonText}>RU</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default OpenScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: palette.backWhite,
        flexDirection: 'column',
        paddingTop: 45,
        alignItems: 'center',
    },
    iconImageStyle: {
        width: 255,
        height: 255,
        resizeMode: 'cover',
        borderRadius: 112,
    },
    imageContainer: {
        width: 255,
        height: 255,
        marginVertical: 60,
    },
    textContainer: {

    },
    middleCenterText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '400',
        color: palette.mainBlack,
        width: 200,
    },
    languageBox: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 27,
        marginTop: 60,
    },
    languageButton: {
        width: 87,
        height: 54,
        borderRadius: 8,
        backgroundColor: palette.mainBlack,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: palette.backWhite,
        fontSize: 18,
        fontWeight: '700',
    },
});

