import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, ImageBackground } from 'react-native'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import DATA from '../data/WeatherData'

const weatherMap = {
  "clouds": <MaterialCommunityIcons name="lamp" color={"white"} size={30}/>, 
  "rain": <MaterialCommunityIcons name="tent" color={"white"} size={30}/>,
  "clear": <MaterialCommunityIcons name="map" color={"white"} size={30}/>
}

const Item = (props) => {
  const { dt_txt, temp, condition } = props
  return (
    <View style={styles.item}>
      {weatherMap[condition.toLowerCase()]}
      <View style={styles.itemInfo}>
        <Text style={styles.date}>{dt_txt}</Text>
        <Text style={styles.temp}>{temp} °F</Text>
      </View>
    </View>
  )
}

const ListScreen = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Item 
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      temp={item.main.temp}
      />
  )
  const temps = DATA.map(item => item.main.temp)
  const high = temps.reduce((acc, cur) => acc > cur ? acc : cur, temps)
  const low = temps.reduce((acc, cur) => acc < cur ? acc : cur, temps)
  return (
    <SafeAreaView style={styles.screen}>
      <Text style={styles.summaryText}>Weather summary: </Text>
      <Text style={styles.summarySubtext}>A temperature high of {high}-degrees</Text>
      <Text style={styles.summarySubtext}>A temperature low of {low}-degrees</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.dt_txt}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    backgroundColor: "#ff0000",
    padding: "5%"
  },
  item: {
    padding: 20, 
    marginVertical: 8, 
    marginHorizontal: 16, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    borderWidth: 5,
    backgroundColor: 'pink'
  }, 
  itemInfo: {
    flexDirection: "column"
  }, 
  summaryText: {
    color: 'white', 
    fontSize: 20, 
    fontWeight: "bold"
  },
  summarySubtext: {
    color: 'white', 
    fontSize: 18
  }, 
  temp: {
    color: 'white', 
    fontSize: 20
  }, 
  date: {
    color: 'white', 
    fontSize: 15
  }
})

export default ListScreen