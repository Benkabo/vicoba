import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
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

const Drawer = createDrawerNavigator();

const FETCH_USER = gql`
  query fetchUser($id: String!) {
    users(where: { id: { _eq: $id } }) {
      firstname
      lastname
    }
  }
`;

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

export default function App() {
  const firebase = Firebase;
  const [user, setUser] = useState(null);
  const [authState, setAuthState] = useState({ status: "loading" });
  const [getUser] = useLazyQuery(FETCH_USER);
  const client = makeApolloClient();

  useEffect(() => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        const token = await user.getIdToken();
        const idTokenResult = await user.getIdTokenResult();
        const userFinal = await getUser(user.uid);

        console.log("User fetched: ", userFinal);
        const hasuraClaims =
          idTokenResult.claims["https://hasura.io/jwt/claims"];
      }
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        {/* <AuthStackNavigator /> */}
        {/* <MainStackNavigator /> */}
        {/* <Route /> */}
        {/* <DrawerContent /> */}
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name='' component={} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
