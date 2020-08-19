import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
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
      <View>
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
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
