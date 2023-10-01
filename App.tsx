import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@shopify/restyle";
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
import { theme } from "~utils";

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

  const myTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: theme.colors.defaultBlue,
    },
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar animated style="light" />
        <NavigationContainer theme={myTheme}>
          <SafeAreaProvider>
            <ThemeProvider theme={theme}>
              <KeyboardAvoidingView
                onLayout={onLayoutRootView}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{
                  flex: 1,
                }}
              >
                <AuthenticationNavigator />
              </KeyboardAvoidingView>
            </ThemeProvider>
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
