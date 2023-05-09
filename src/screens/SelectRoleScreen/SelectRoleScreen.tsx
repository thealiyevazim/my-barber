import React from "react";
import { Pressable, SafeAreaView, TouchableOpacity } from "react-native";
import { Container, Text } from "~components";

const SelectRoleScreen = () => {
  return (
    <SafeAreaView
      style={{
        justifyContent: "space-between",
        flex: 1,
        // backgroundColor: "#000",
      }}
    >
      <Container paddingHorizontal={"x"}>
        <Text color={"gray"}>Hello There</Text>
      </Container>
      <Container paddingHorizontal={"x"} marginBottom={"l"}>
        <TouchableOpacity
          style={{
            backgroundColor: "#11145A",
            alignItems: "center",
            justifyContent: "center",
            height: 60,
            borderRadius: 15,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>
            Client
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 4,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 15,
            borderColor: "#11145A",
          }}
        >
          <Text style={{ color: "#11145A", fontWeight: "bold", fontSize: 20 }}>
            Barber
          </Text>
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  );
};

export default SelectRoleScreen;
