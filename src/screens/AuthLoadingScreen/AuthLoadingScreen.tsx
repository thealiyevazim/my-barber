import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppText } from "~components";
import { SafeAreaTemplate } from "~templates";
import { windowHeight, windowWidth } from "~utils";

export const AuthLoadingScreen: React.FC = () => {
  const animation = useRef<LottieView>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(true);
    animation.current?.play();
  }, []);

  return (
    <SafeAreaTemplate>
      <View style={styles.container}>
        <LottieView
          ref={animation}
          style={styles.lottie}
          source={require("~assets/animations/loading.json")}
        />
        <AppText semibold style={styles.text}>
          Ma'lumotlar ishlanmoqda
        </AppText>
      </View>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: windowWidth / 2,
    height: windowHeight / 4,
  },
  text: {
    fontSize: 26,
    textAlign: "center",
  },
});
