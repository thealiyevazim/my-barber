import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'

const carouselData = [

  {id:1,  source:require("../../../assets/images/CarouselSlider.png") },
  { id:2, source:require( "../../../assets/images/CarouselSlider.png") },
  {  id:3,source:require( "../../../assets/images/CarouselSlider.png") },
  // Add more items as needed
];

import CarouselMain from '~components/CarouselFlatList/CarouselMain';
import { palette } from '~utils/theme';

const Chat = () => {
  return (
    <View style={styles.container}>
      {/* <CarouselMain data={carouselData}  /> */}
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    backgroundColor:palette.white,
    justifyContent:"center",
  },
  carouselContainer:{
  },
})