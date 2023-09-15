import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MapboxGL from '@rnmapbox/maps'
import DATA from '../data/LocationData'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'


MapboxGL.setAccessToken('')
MapboxGL.setTelemetryEnabled(false)
MapboxGL.setWellKnownTileServer('Mapbox')

const MapScreen = () => {
  const [mapData, setMapData] = React.useState()
  React.useEffect(() => {
    if(!mapData){
      const locationPins = DATA.map(x => (
        <MapboxGL.PointAnnotation 
          id={x.id}
          key={x.name}
          coordinate={[x.longitude, x.latitude]}
          >
          <View>
            <FontAwesomeIcon icon={faMapPin} size={30}/>
          </View>
        </MapboxGL.PointAnnotation>
      ))
      const origin = [ 
        DATA.map(x => x.longitude).reduce((acc, long) => acc+long)/DATA.length, 
        DATA.map(x => x.latitude).reduce((acc, lat) => acc+lat)/DATA.length
      ]
      setMapData({
        locationPins: locationPins, 
        origin: origin
        }
      )
    }
  }, []); 

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          zoomEnabled={true}
          styleURL='mapbox://styles/mapbox/streets-v12'
          rotateEnabled={true}
          >
          <MapboxGL.Camera
            zoomLevel={10}
            centerCoordinate={mapData ? mapData.origin : [0, 0]}
            pitch={0}
            animationMode={'flyTo'}
            animationDuration={6000}
            />
            {mapData ? mapData.locationPins : <></>}
        </MapboxGL.MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 26
  }, 
  map: {
    flex: 1
  }
});

export default MapScreen;