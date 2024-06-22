import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { HistoryData } from '~components'

const data = [
  1, 2, 3
]

export const HistoryComponent: React.FC = () => {

  const renderItem = () => (
    <HistoryData />
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  }
})