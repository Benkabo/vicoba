import "react-native-gesture-handler";
import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ApolloProvider, useLazyQuery, gql } from "@apollo/client";
import makeApolloClient from "./src/Apollo";

import Firebase from "./src/utils/Firebase";
import AuthStackNavigator from "./src/Navigation/AuthStack";
import MainStackNavigator from "./src/Navigation/MainStack";
import Splash from "./src/Screens/Splash";
import { DrawerContent } from "./src/Screens/DrawerContent";
import AddAccount from "./src/components/AddAccount";
import { AuthProvider, AuthContext } from "./src/Navigation/AuthProvider";
import Route from "./src/Navigation/Route";
import MyAccount from "./src/components/MyAccount";
import Infomation from "./src/components/Infomation";
console.disableYellowBox = true;
const Drawer = createDrawerNavigator();

const client = makeApolloClient();

export default function DrawerBar() {
  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name="Homepage" component={MainStackNavigator} />
    <Drawer.Screen name="AddAccount" component={AddAccount} />
    <Drawer.Screen name="MyAccount" component={MyAccount} />
    <Drawer.Screen name="Info" component={Infomation} />
  </Drawer.Navigator>;
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <NavigationContainer>
          <AuthStackNavigator />
        </NavigationContainer>
      </AuthProvider>
    </ApolloProvider>
  );
}
