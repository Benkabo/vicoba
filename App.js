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

const Drawer = createDrawerNavigator();

const FETCH_USER = gql`
  query fetchUser($id: String!) {
    users(where: { id: { _eq: $id } }) {
      firstname
      lastname
    }
  }
`;
const client = makeApolloClient();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {/* <AuthStackNavigator /> */}
        {/* <MainStackNavigator /> */}
        {/* <Route /> */}
        {/* <DrawerContent /> */}
     <Drawer.Navigator drawerContent={(props) => <DrawerContent  {...props} />}>
       <Drawer.Screen name="Homepage" component={MainStackNavigator} />
       <Drawer.Screen name='AddAccount' component={AddAccount} />
     </Drawer.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
