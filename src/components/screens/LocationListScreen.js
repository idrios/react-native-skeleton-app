import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, ImageBackground } from 'react-native'
import DATA from '../data/LocationData'

const Location = (props) => {
  const { name, latitude, longitude, imageUrl } = props
  return (
    <View style={styles.item}>
      <ImageBackground source={{uri: imageUrl}} style={styles.backgroundImage}>
        <View style={styles.opaquebg}>
          <Text style={styles.boldtext}>{name}</Text>
          <Text style={styles.text}>latitude: {latitude}</Text>
          <Text style={styles.text}>latitude: {longitude}</Text>
        </View>
      </ImageBackground>
    </View>
  )
}

const LocationListScreen = ({navigation}) => {
  const renderItem = ({ item }) => (
    <Location 
      name={item.name}
      latitude={item.latitude}
      longitude={item.longitude}
      imageUrl={item.thumbnail_image_url}
      />
  )
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    backgroundColor: "#000000",
    padding: "5%"
  },
  item: {
    flex: 1, 
    height: 100,
    marginVertical: 8, 
    marginHorizontal: 16, 
    borderRadius: 40
  }, 
  backgroundImage: {
    flex: 1, 
    borderRadius: 10
  }, 
  opaquebg: {
    flex: 1,
    margin: "3%", 
    padding: "3%", 
    backgroundColor: "#00000060"
  }, 
  boldtext: {
    color: "#fff", 
    fontWeight: "bold"
  }, 
  text: {
    color: "#fff"
  }, 
})

export default LocationListScreen