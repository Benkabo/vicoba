import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import Colors from '../../Colors'

export default function Bima() {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>KIASI</Text>
      <View>
        <TextInput
          label="Kiasi"
          value={value}
          onChangeText={(val) => setValue(val)}
          style={styles.input}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.send}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: Colors.darkWhite,
            }}
          >
            TUMA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    marginHorizontal: 30,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.black,
    letterSpacing: 3,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 3,
    textAlign: "right",
    fontSize: 25,
    paddingTop: 15
  },
  button: {
    marginTop: 30,
  },
  send: {
    width: '100%',
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: Colors.blue,
  },
});