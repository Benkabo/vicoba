import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-paper";
import Colors from "../../Colors";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = {
    colors: {
      primary: Colors.lightblue,
    },
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        mode="outlined"
        theme={theme}
        style={styles.input}
        value={email}
        onChangeText={(val) => setEmail(val)}
        autoCapitalize="none"
        left={<TextInput.Icon name="email" color={Colors.lightblue}  />}
      />
      <TextInput
        label="Password"
        mode="outlined"
        theme={theme}
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={(val) => setPassword(val)}
        autoCapitalize="none"
        left={<TextInput.Icon name="textbox-password" color={Colors.lightblue}  />}
      />
      <TouchableOpacity style={styles.button} onPress={() => onLoginPress()}>
        <Text style={styles.buttonTitle}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 15,
      },
      input: {
        marginBottom: 20,
      },
      button: {
        alignItems: "center",
        backgroundColor: Colors.blue,
        borderRadius: 4,
        padding: 15,
      },
      buttonTitle: {
        fontSize: 20,
        color: Colors.darkWhite,
        fontWeight: "bold",
      },
});
