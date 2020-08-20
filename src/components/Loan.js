import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";

export default function Loan() {
  const [amount, setAmount] = useState("");

  const theme = {
    colors: {
      primary: Colors.lightblue,
    },
  };

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 20}}>
        <Text style={[styles.text, { textTransform: "uppercase" }]}>
          kiasi unachoweza kukopa
        </Text>
        <TextInput
          mode="outlined"
          theme={theme}
          style={{ marginBottom: 10 }}
          value={amount}
          onChangeText={(val) => setAmount(val)}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={[styles.text, { textTransform: "uppercase" }]}>
          kiasi unachotaka kukopa
        </Text>
        <TextInput
          mode="outlined"
          theme={theme}
          style={{ marginBottom: 10 }}
          value={amount}
          onChangeText={(val) => setAmount(val)}
        />
      </View>
      <View style={{marginBottom: 20}}>
        <Text style={[styles.text, { textTransform: "uppercase" }]}>
         marejesho
        </Text>
        <TextInput
          mode="outlined"
          theme={theme}
          style={{ marginBottom: 10 }}
          value={amount}
          onChangeText={(val) => setAmount(val)}
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
    marginHorizontal: 20,
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
