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

// const Route = () => {
//   const firebase = Firebase;
//   const [user, setUser] = useState(null);
//   const [authState, setAuthState] = useState({ status: "loading" });
//   const [getUser] = useLazyQuery(FETCH_USER);

//   useEffect(() => {
//     return firebase.auth().onAuthStateChanged(async (user) => {
//       if (user) {
//         const token = await user.getIdToken();
//         const idTokenResult = await user.getIdTokenResult();
//         const userFinal = await getUser(user.uid);

//         console.log("User fetched: ", userFinal);
//         const hasuraClaims =
//           idTokenResult.claims["https://hasura.io/jwt/claims"];

//         if (hasuraClaims) {
//           setAuthState({ status: "in", user, token });
//         } else {
//           const metadataRef = firebase
//             .database()
//             .ref("metadata/" + user.uid + "/refreshTime");

//           metadataRef.on("value", async (data) => {
//             if (!data.exists) return;
//             const token = await user.getIdToken(true);
//             console.log("The current user data", data);
//             setAuthState({ status: "in", user, token });
//           });
//         }
//       } else {
//         setAuthState({ status: "out" });
//       }
//     });
//   }, []);

//   if (authState.status === "loading") {
//     return <Splash />;
//   }
//   if (authState.status === "out") {
//     return <AuthStackNavigator />;
//   }
//   if (authState.status === "in") {
//     return <MainStackNavigator />;
//   }
// };

const client = makeApolloClient();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>

     <Drawer.Navigator drawerContent={(props) => <DrawerContent  {...props} />}>
       <Drawer.Screen name="Homepage" component={MainStackNavigator} />
       <Drawer.Screen name='AddAccount' component={AddAccount} />
     </Drawer.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
