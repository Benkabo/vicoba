import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Infomation() {
  return (
    <View style={styles.container}>
      <Text>Hakuna taarifa kwa sasa</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
