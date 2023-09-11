import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Mapbox from '@rnmapbox/maps';
import { dateTimeNowFormatted } from '../../util/util';

Mapbox.setAccessToken('<YOUR_ACCESSTOKEN>');

const createConnection = (serverUrl) => {
  const connection = {
    connect: () => {console.info(`[${dateTimeNowFormatted()}][${serverUrl}] connected`)},
    disconnect: () => {console.info(`[${dateTimeNowFormatted()}] disconnected`)}
  }
  return connection
}

const MapScreen = () => {
  const [serverUrl, setServerUrl] = React.useState("0.0.0.0:8000")
  React.useEffect(() => {
  	//TODO: something with realtime data using Mapbox instead of this fake implementation
    const connection = createConnection(serverUrl);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl]);

  return (
    <View style={styles.page}>
      <Text style={styles.text}>Mapbox funtionality not yet implemented</Text>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map} />
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