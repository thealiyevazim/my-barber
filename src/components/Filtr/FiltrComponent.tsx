import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
// ------- SVG file ------ // 
import FilterIcon from '~assets/icons/FilterIcon'
import { palette } from '~utils/theme'

const FiltrComponent = () => {

  return (
    <TouchableOpacity style={styles.filterComponentStyle}>
        <FilterIcon  style={styles.filterIconStyle}/>
    </TouchableOpacity>
  )
}

export default FiltrComponent

const styles = StyleSheet.create({
    filterComponentStyle:{
        backgroundColor:palette.mainBlack,
        height:40,
        width:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    filterIconStyle:{
      color:palette.mainWhite
    },
})