import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  StatusBar,

} from "react-native";
import Modal from "react-native-modal";
import CalendarStrip from "react-native-calendar-strip";
import { useNavigation } from "@react-navigation/native";
import LeftBack from "~assets/icons/ArrowLeft";
import { palette } from "~utils/theme";
import RNPickerSelect from "react-native-picker-select";
import BottomDropdownSelect from "~components/BottomDropdownComponent/BottomDropDownSelection";
import { TimeDropDownSelect } from "~components/TimeDropDownSelect";
import { ServiceComponent } from "~components/ServiceComponent";
import { NextButton } from "~components";

interface Option {
  label: string;
  value: string;
}

const BookingBarber: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.mainContainer}>
        <View style={styles.appoinment}>
          <TouchableOpacity onPress={goBack}>
            <LeftBack color="#181818" />
          </TouchableOpacity>
          <Text style={styles.bronText}>Bron qilish</Text>
        </View>
        <Text style={styles.miniText}>Kunni tanlash</Text>
        <View>
          <CalendarStrip
            style={styles.calendarStyle}
            calendarAnimation={{ type: "sequence", duration: 100 }}
            calendarHeaderStyle={{
              color: "#181818",
              fontSize: 18,
              fontWeight: "600",
              marginTop: 15,
            }}
            calendarColor={"#fff"}
            dateNumberStyle={{
              color: "#181818",
              fontSize: 14,
              fontWeight: "400",
              alignItems: "center",
            }}
            dateNameStyle={{
              color: "#9ca3af",
              fontSize: 10,
              fontWeight: "400",
              marginBottom: 15,
              alignItems: "center",
            }}
            highlightDateNumberStyle={{
              color: "#ffff",
              backgroundColor: "#181818",
              width: 28,
              height: 28,
              borderRadius: 4,
              paddingVertical: 3,
              marginTop: 7,
              alignItems: "center",
            }}
            highlightDateNameStyle={{
              color: "#9ca3af",
              fontWeight: "400",
              fontSize: 10,
              paddingBottom: 5,
              marginTop: 5,
            }}
            disabledDateNameStyle={{ color: "grey" }}
            disabledDateNumberStyle={{ color: "grey" }}
            iconLeftStyle={{
              // top: -50,
              // left: 15,
              width: 20,
              height: 20,
              // position: "absolute",
            }}
            iconRightStyle={{
              // top: -50,
              // right: 15,
              width: 20,
              height: 20,
              // position: "absolute",
              
            }}
            useIsoWeekday={true}
          />
        </View>
        <Text style={styles.miniText}>Vaqtni tanlash</Text>
        <View style={styles.bookingTime}>
          <TimeDropDownSelect  style={styles.timeDropdownTimeStyle}/>
          <BottomDropdownSelect style={styles.timeDropdownStyle}/>
        </View>
        <Text style={styles.miniTextService}>Servis</Text>
        <View style={styles.servisesStyle}>
          <ServiceComponent  style={styles.seviseViewStyle}/>
        </View>
        <Text style={styles.miniTextPerson}>Necha Kishi?</Text>
        <View style={styles.peopleStyleBox}>
          <View style={styles.personBox}>
            <Text style={styles.personCount}>0</Text>
            <Text style={styles.personText}>person</Text>
          </View>
          <View style={styles.calculationBox}>
            <TouchableOpacity style={styles.minusButton}>
              <Text style={styles.minusText}>--</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.minusButton}>
              <Text style={styles.minusText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.modalButton}>
        <NextButton btnTitle="Next" handleClick={openModal} />
      </TouchableOpacity>

      <Modal
        isVisible={modalVisible}
      >
        <View style={styles.modalBody}>
          <TouchableOpacity style={styles.backButtonStyle} hitSlop={{left:10,top:10,bottom:10,right:10}} onPress={closeModal}>
            <LeftBack color="#181818" />
          </TouchableOpacity>
            <View style={styles.confrimTopDiv}>
              <View style={styles.textCenter}> 
                <Text style={styles.leftGrayText}>Service</Text>
                <Text style={styles.rightBlackText}>Shaving</Text>
              </View>
              <View style={styles.textCenter}> 
                <Text style={styles.leftGrayText}>Quantity</Text>
                <Text style={styles.rightBlackText}>1 person</Text>
              </View>
              <View style={styles.textCenter}> 
                <Text style={styles.leftGrayText}>Address</Text>
                <Text style={styles.rightBlackText}>Uchtepa tumani,Mahorat 23</Text>
              </View>
              <View style={styles.textCenter}> 
                <Text style={styles.leftGrayText}>Booking date</Text>
                <Text style={styles.rightBlackText}>Monday,12 June 2024</Text>
              </View>
              <View style={styles.textCenter}> 
                <Text style={styles.leftGrayText}>Booking time</Text>
                <Text style={styles.rightBlackText}>11:30 AM</Text>
              </View>
            </View>
            <View style={styles.confrimBottomDiv}>
              <View style={styles.totalStyle}>
                <Text style={styles.totalText}>Total</Text>
                <Text style={styles.totalSum}>80 000</Text>
              </View>
            </View>
            <View style={styles.confrimButtonDiv}>
            <TouchableOpacity style={styles.confrimButton} onPress={closeModal}>
              <Text style={styles.confrimText}>Confrim</Text>
            </TouchableOpacity>
            </View>
        </View>
      </Modal>
    </View>
  );
};

export default BookingBarber;

const styles = StyleSheet.create({
  seviseViewStyle:{
    zIndex:-90,
    position:'absolute',
    top:-40,
  },
  miniTextService:{
    fontSize: 16,
    fontWeight: "500",
    marginTop: 55,
    color: palette.mainBlack,
    zIndex:-90,

  },
  timeDropdownTimeStyle:{
    position:'absolute',
    left:10,
    zIndex:-10,
  },
  timeDropdownStyle:{
    position:'absolute',
    right:10,
    zIndex:-10,
  },
  container: {
    paddingTop: 45,
    paddingHorizontal: 15,
    zIndex:-100,
  },
  mainContainer: {
    flexDirection: "column",
  },
  appoinment: {
    flexDirection: "row",
    alignItems: "center",
    gap: 42,
  },
  bronText: {
    fontSize: 22,
    fontWeight: "700",
  },
  miniText: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 10,
    color: palette.mainBlack,
    zIndex:-90,
  },
  miniTextPerson:{
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 10,
    color: palette.mainBlack,
    zIndex:-91,
  },
  calendarStyle: {
    width: 330,
    height: 120,
    marginBottom: 20,
  },
  bookingTime: {
    flexDirection: "row",
    position:'relative'
  },
  selectPicker: {
    color: "red",
  },
  servisesStyle: {
    marginTop:48,
    zIndex:-90,
    marginBottom:8,
  },
  peopleStyleBox: {
    width: 332,
    height: 52,
    borderRadius: 4,
    backgroundColor: palette.backWhite,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    zIndex:-91,
    marginTop:10,
  },
  personBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  personCount: {
    fontSize: 18,
    fontWeight: "500",
    color: palette.personGray,
  },
  personText: {
    fontSize: 12,
    fontWeight: "500",
    color: palette.personGray,
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
  modalButton: {
    marginTop: 180,
  },
  modalBody: {
    width: 325,
    height: 562,
    borderRadius: 8,
    backgroundColor: palette.white,
    flexDirection:'column',
    paddingVertical:15,
    justifyContent:'center',
  },
  confrimButton:{
    width:305,
    height:52,
    borderRadius:8,
    backgroundColor:palette.mainBlack,
    textAlign:'center',
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:10,
  },
  confrimText:{
    color:palette.white,
    fontSize:20,
    fontWeight:'700',
  },
  confrimTopDiv:{
    flexDirection:'column',
    borderBottomColor:palette.personGray,
    borderBottomWidth:1,
    gap:20,
    paddingHorizontal:15,
    paddingBottom:24,
  },
  textCenter:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  leftGrayText:{
    fontSize:14,
    fontWeight:'400',
    color:palette.totalGray,
  },
  rightBlackText:{
    fontSize:16,
    fontWeight:'400',
    color:palette.mainBlack,
  },
  backButtonStyle:{
    marginHorizontal:15,
    marginBottom:15,
  },
  confrimBottomDiv:{
    marginTop:24,
    paddingHorizontal:15,
  },
  totalStyle:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  totalText:{
    fontSize:16,
    fontWeight:'400',
    color:palette.totalGray,
  },
  totalSum:{
    fontSize:18,
    fontWeight:'500',
    color:palette.mainBlack,
  },
  confrimButtonDiv:{
    marginTop:165,
  },
});
