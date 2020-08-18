import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Colors from "../../Colors";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='small' color={Colors.lightblue} />
      <Text>loading ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row'

  },
});
