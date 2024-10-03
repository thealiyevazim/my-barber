import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import * as Location from "expo-location";

// Define the type for the location data
interface LocationCoords {
  latitude: number;
  longitude: number;
  altitude?: number;
  accuracy?: number;
  heading?: number;
  speed?: number;
}

interface LocationDataProps {
  setLocationData: (location: Location.LocationObject) => void;
}

export default function LocationData({ setLocationData }: LocationDataProps) {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      if (location && location.coords) {
        setLocation(location);
        setLocationData(location);
      } else {
        setErrorMsg("Could not get location");
      }
    })();
  }, []);

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  if (!location) {
    return <Text>Getting location...</Text>;
  }

  return null;
}
