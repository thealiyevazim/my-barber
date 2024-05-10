import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppButton, AppText, BottomComponent, CodeInput } from "~components";
import { ClientNavigationProp, ClientRouteProp } from "~navigation";
import { SafeAreaTemplate } from "~templates";
import { formatSecuredPhoneNumber } from "~utils";

export const EnterOtpScreen: React.FC = () => {
  const { params } = useRoute<ClientRouteProp<"EnterOtpScreen">>();
  const navigation = useNavigation<ClientNavigationProp<"EnterOtpScreen">>();

  const [code, setCode] = useState("");

  const handleNextPage = useCallback(() => {
    navigation.navigate("EnterFullNameScreen", {
      phoneNumber: params.phoneNumber,
    });
  }, [params.phoneNumber]);

  return (
    <SafeAreaTemplate isDark>
      <BottomComponent bottomStyles={styles.container}>
        <View style={styles.inputContainer}>
          <AppText style={styles.title}>
            Faollashtirish kodi raqamingizga yuborildi {"\n"}
            {formatSecuredPhoneNumber(params.phoneNumber)}
          </AppText>

          <CodeInput onChangeText={setCode} value={code} />
        </View>

        <AppButton
          title="Tasdiqlash"
          onPress={handleNextPage}
          disabled={!Boolean(code.length > 5)}
        />
      </BottomComponent>
    </SafeAreaTemplate>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: { textAlign: "center", fontSize: 16, marginBottom: 15 },
  inputContainer: {
    flex: 1,
    alignItems: "center",
  },
});
