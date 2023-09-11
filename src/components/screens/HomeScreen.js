import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native'


const HomeScreen = ({navigation}) => {
  return (
      <SafeAreaView style={styles.fullScreenOverlay}>
        <Text style={styles.centerLoading}>Welcome!</Text>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  fullScreenOverlay: {
    position: "absolute", 
    width: "100%", 
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#000000"
    
  }, 
  centerLoading: {
    alignSelf: "center", 
    color: "#fff", 
    fontSize: 48, 
    fontWeight: "bold"
  }
})

export default HomeScreen