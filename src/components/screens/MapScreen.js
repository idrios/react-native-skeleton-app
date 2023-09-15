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
  const [mapMarkers, setMapMarkers] = React.useState()
  const [mapOrigin, setMapOrigin] = React.useState()
  React.useEffect(() => {
    if(!mapMarkers){
      setMapMarkers(DATA.map(x => (<MapboxGL.PointAnnotation 
        id={x.name}
        coordinate={[x.longitude, x.latitude]}
        >
        <View>
          <FontAwesomeIcon icon={faMapPin} size={30}/>
        </View>
      </MapboxGL.PointAnnotation>
        )))
    }
    if(mapMarkers && !mapOrigin){
      setMapOrigin([ // set origin at the average lat/long of each marker
        DATA.map(x => x.longitude).reduce((acc, long) => acc+long)/mapMarkers.length, 
        DATA.map(x => x.latitude).reduce((acc, lat) => acc+lat)/mapMarkers.length
      ])
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
            zoomLevel={11}
            centerCoordinate={mapOrigin}
            pitch={0}
            animationMode={'flyTo'}
            animationDuration={6000}
            />
            {mapMarkers}
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