import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "../components/Homepage";
import Colors from "../../Colors";
import Loan from "../components/Loan";
import Bima from "../components/Bima";
import Jamii from "../components/Jamii";

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
        <MainStack.Screen
        name="Loan"
        component={Loan}
        options={{ title: "MKOPO" }}
      />
        <MainStack.Screen
        name="Bima"
        component={Bima}
        options={{ title: "BIMA" }}
      />
      <MainStack.Screen
        name="Jamii"
        component={Jamii}
        options={{ title: "MFUKO WA JAMII" }}
      />
    </MainStack.Navigator>
  );
}
