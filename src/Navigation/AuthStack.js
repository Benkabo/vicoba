import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import RegisterScreen from "../Screens/RegisterScreen";
import LoginScreen from "../Screens/LoginScreen";
import StartScreen from "../Screens/StartScreen";
import Colors from "../../Colors";

const AuthStack = createStackNavigator();
export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName={StartScreen}
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.lightblue,
        },
        headerTitleAlign: "center",
        headerTintColor: Colors.darkWhite,
        headerLeft: null,
      }}
    >
      <AuthStack.Screen
        name="loading"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="login"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
      <AuthStack.Screen
        name="register"
        component={RegisterScreen}
        options={{ title: "TENGENEZA KUNDI" }}
      />
    </AuthStack.Navigator>
  );
}
