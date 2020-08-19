import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "../components/Homepage";
import Colors from "../../Colors";

const MainStack = createStackNavigator();
export default function MainStackNavigator() {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.lightblue,
        },
        headerTitleAlign: "center",
        headerTintColor: Colors.darkWhite,
      }}
    >
      <MainStack.Screen
        name="Home"
        component={Homepage}
        options={{ title: "KARIBU" }}
      />
    </MainStack.Navigator>
  );
}
