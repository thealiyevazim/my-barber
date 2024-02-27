import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

interface LocationCoordinates {
  latitude: number;
  longitude: number;
}

const TestScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<LocationCoordinates | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      const { latitude, longitude } = location.coords;

      let addressResponse = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (addressResponse.length > 0) {
        let { district, street, name } = addressResponse[0];
        setAddress(`${street} ${name}, ${district}`);
      }
    })();
  }, []);

  const determineCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      const { latitude, longitude } = location.coords;

      let addressResponse = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (addressResponse.length > 0) {
        let { district, street, name } = addressResponse[0];
        setAddress(`${street} ${name}, ${district}`);
      }

      setSelectedLocation({
        latitude,
        longitude,
      });
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleMapRegionChange = async (region: LocationCoordinates) => {
    const { latitude, longitude } = region;

    try {
      let addressResponse = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (addressResponse.length > 0) {
        let { district, street, name } = addressResponse[0];
        setAddress(`${street} ${name}, ${district}`);
        setSelectedLocation({
          latitude,
          longitude,
        });
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleCloseModal = () => {
    if (selectedLocation) {
      setLocation({
        coords: {
          latitude: selectedLocation.latitude,
          longitude: selectedLocation.longitude,
        },
      });
    }
    handleExportAddress();
    setModalVisible(false);
  };

  const handleExportAddress = () => {
    console.log('Address:', address);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Selected Address: {address}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          {location && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onPress={(e) => handleMapRegionChange(e.nativeEvent.coordinate)}
            >
              {selectedLocation && (
                <Marker
                  coordinate={{
                    latitude: selectedLocation.latitude,
                    longitude: selectedLocation.longitude,
                  }}
                  draggable
                  onDragEnd={(e) => handleMapRegionChange(e.nativeEvent.coordinate)}
                />
              )}
            </MapView>
          )}

          <TouchableOpacity style={styles.button} onPress={handleCloseModal}>
            <Text style={styles.buttonText}>Close Modal</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={determineCurrentLocation}>
            <Text style={styles.buttonText}>Determine Current Location</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TestScreen;