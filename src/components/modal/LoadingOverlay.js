import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native"


class LoadingOverlay extends Component{
  constructor(props){
    super(props)
    this.message = props.message || "LOADING..."
  }
  render(){
    return(
      <View style={styles.fullScreenOverlay}>
        <Text style={styles.centerLoading}>{this.message}</Text>
      </View>
    )
  } 
}


const styles = StyleSheet.create({
  fullScreenOverlay: {
    position: "absolute", 
    width: "100%", 
    height: "100%",
    justifyContent: "center",
    backgroundColor: "#000000d0"
    
  }, 
  centerLoading: {
    alignSelf: "center", 
    color: "#fff", 
    fontSize: 48, 
    fontWeight: "bold"
  }
})

export default LoadingOverlay