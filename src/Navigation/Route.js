import React, { useContext, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { AuthContext } from "./AuthProvider";
import Firebase from "../utils/Firebase";
import Splash from "../Screens/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../Screens/DrawerContent";
import MainStackNavigator from "./MainStack";
import AddAccount from "../components/AddAccount";
import AuthStackNavigator from "./AuthStack";
const Drawer = createDrawerNavigator();

export default function Route() {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (loading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      {user ? (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name="Homepage" component={MainStackNavigator} />
          <Drawer.Screen name="AddAccount" component={AddAccount} />
        </Drawer.Navigator>
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
  );
}
