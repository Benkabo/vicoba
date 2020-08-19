import "react-native-gesture-handler";
import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { ApolloProvider } from "@apollo/client";
import makeApolloClient from "./src/Apollo";

import Firebase from './src/utils/Firebase'
import AuthStackNavigator from "./src/Navigation/AuthStack";


export default function App() {
  const client = makeApolloClient();
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}
