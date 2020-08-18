import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";

import { ApolloProvider } from "@apollo/client";
import makeApolloClient from "./src/Apollo";
import SplashScreen from "./src/Screens/SplashScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";

export default function App() {
  const client = makeApolloClient();
  return (
    <View style={{flex:1}}>
      {/* <SplashScreen /> */}
      {/* <LoginScreen /> */}
      {/* <Text>Bene</Text> */}
      <RegisterScreen />
    </View>
  );
}

