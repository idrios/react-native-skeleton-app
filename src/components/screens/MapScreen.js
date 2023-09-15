import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MapboxGL from '@rnmapbox/maps'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'


MapboxGL.setAccessToken('<YOUR_ACCESSTOKEN>')
MapboxGL.setTelemetryEnabled(false)
MapboxGL.setWellKnownTileServer('Mapbox')

const MapScreen = () => {
  React.useEffect(() => {
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
            zoomLevel={15}
            centerCoordinate={[-83.012, 40.001]}
            pitch={60}
            animationMode={'flyTo'}
            animationDuration={6000}
            />
            <MapboxGL.PointAnnotation 
              id="marker"
              coordinate={[-83.012, 40.001]}
              >
              <View>
                <FontAwesomeIcon icon={faMapPin} size={30}/>
              </View>
            </MapboxGL.PointAnnotation>
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
    height: 300,
    width: 300,
  },
  text: {
    fontSize: 26
  }, 
  map: {
    flex: 1
  }
});

export default MapScreen;