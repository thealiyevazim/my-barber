import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { fonts } from "~assets/fonts";
import { AuthenticationNavigator } from "~navigation";
import { persistor, store } from "~store";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar animated style="auto" />
        <NavigationContainer>
          <SafeAreaProvider>
            <KeyboardAvoidingView
              onLayout={onLayoutRootView}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{
                flex: 1,
              }}
            >
              <AuthenticationNavigator />
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
