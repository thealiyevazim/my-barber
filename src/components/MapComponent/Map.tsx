import React, { useState, useEffect, useRef } from "react";
import MapView, { Marker, Circle, PROVIDER_GOOGLE } from "react-native-maps";
import { View, StyleSheet } from "react-native";
import LocationData from "./LocationData";
import * as Location from "expo-location";

interface Pin {
  latitude: number;
  longitude: number;
}

export default function Map() {
  const [pin, setPin] = useState<Pin | null>(null);
  const [locationData, setLocationData] = useState<Location.LocationObject | null>(null);
  const mapRef = useRef<MapView>(null);

  useEffect(() => {
    if (locationData) {
      setPin({
        latitude: locationData.coords.latitude,
        longitude: locationData.coords.longitude,
      });
    }
  }, [locationData]);

  return (
    <View style={styles.mapContainer}>
      <LocationData setLocationData={setLocationData} />
      {pin && (
        <MapView
          style={styles.mapView}
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: pin.latitude,
            longitude: pin.longitude,
            latitudeDelta: 0.0001,
            longitudeDelta: 0.0001,
          }}
          zoomEnabled={false}
          scrollEnabled={false}
        >
          <Marker
            coordinate={pin}
            image={require("./../../assets/images/location.png")}
          />
          <Circle
            center={pin}
            radius={40}
            fillColor="rgba(245, 159, 39, 0.33)"
            strokeColor="rgba(255, 149, 0, 1)"
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mapContainer: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  mapView: {
    width: "100%",
    height: "100%",
  },
});
