import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { fonts } from "~assets/fonts";
import { NavigationProvider } from "~navigation";
import NotificationServices from "~services/notificationService";
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
        <NotificationServices>
          <StatusBar animated style="auto" />
          <SafeAreaProvider>
            <KeyboardAvoidingView
              onLayout={onLayoutRootView}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{
                flex: 1,
              }}
            >
              <NavigationProvider />
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </NotificationServices>
      </PersistGate>
    </Provider>
  );
};

export default App;
