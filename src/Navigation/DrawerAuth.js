import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../Screens/DrawerContent";
import MainStackNavigator from "./MainStack";
import AddAccount from "../components/AddAccount";
import MyAccount from "../components/MyAccount";
import Infomation from "../components/Infomation";
import Account from "../components/Account";

const Drawer = createDrawerNavigator();
export default function DrawerAuth() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Homepage" component={MainStackNavigator} />
      <Drawer.Screen name="AddAccount" component={AddAccount} />
      <Drawer.Screen name="MyAccount" component={MyAccount} />
      <Drawer.Screen name="Info" component={Infomation} />
      <Drawer.Screen name="Account" component={Account} />
    </Drawer.Navigator>
  );
}
