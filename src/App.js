import React, { useState } from "react" 
import { SafeAreaView, StyleSheet, View, Button, Text } from "react-native"
import { LoginScreen, HomeScreen, MapScreen, ListScreen } from "./components/screens"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { SCREEN } from "./res/values/constants"
import { dateTimeNow, dateTimeNowFormatted } from "./util/util"

const Tab = createBottomTabNavigator();

const App = () => {
  const [token, setToken] = React.useState()  

  if(!token || !token.username || !token.expiry) {  // log out user if token missing or expired
    return <LoginScreen setToken={setToken}/>
  }
  if(token.expiry < dateTimeNow()){
    console.info(`[${dateTimeNowFormatted()}] User was automatically logged out due to inactivity`)
    setToken(null)
  }

  const HeaderRight = () => {
    // log out should prompt a confirmation modal
    return(
      <View style={styles.header}>
        <Text style={styles.headerUsername}>{token.username}</Text>
        <Text style={styles.headerLogout} onPress={() => {
          console.info(`[${dateTimeNowFormatted()}] "${token.username}" logged out`)
          setToken(null)}}>logout</Text>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={SCREEN.HOME} 
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              // these icons are bugging for me so I've picked random ones
              <MaterialCommunityIcons name="map" color={color} size={size}/> 
            ), 
            headerRight: HeaderRight
          }}
          component={HomeScreen} 
          />
        <Tab.Screen name={SCREEN.LIST} 
          options={{
            title: 'List',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="video" color={color} size={size}/>
            ), 
            headerRight: HeaderRight
          }}
          component={ListScreen}
          />
        <Tab.Screen name={SCREEN.MAP} 
          component={MapScreen} 
          options={{
            title: 'Map',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="dog" color={color} size={size}/>
            ), 
            headerRight: HeaderRight
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row", 
    alignItems: "center"
  }, 
  headerUsername: {
    color: "black",
    fontSize: 18, 
    marginRight: "5%"
  },
  headerLogout: {
    color: "#4444aa",
    fontSize: 18, 
    fontWeight: "bold",
    marginRight: "5%"
  },
  text: {
    fontSize: 30
  },
  textinput: {
    backgroundColor: "#a0a0a0a0",
    width: "40%", 
    margin: 2,
    borderRadius: 10
  }
})


export default App