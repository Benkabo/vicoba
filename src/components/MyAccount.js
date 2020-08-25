import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Colors from "../../Colors";
import { gql, useQuery } from "@apollo/client";
import Splash from "../Screens/Splash";

const FETCH_USER = gql`
  query MyQuery {
    users {
      email
      firstname
      lastname
      phone
    }
  }
`;

export default function MyAccount() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [editStatus, setEditStatus] = React.useState(true);
  const { loading, error, data } = useQuery(FETCH_USER);

  const editable = () => {
    setEditStatus(!editStatus)
  }

  const theme = {
    colors: {
      primary: Colors.lightblue,
    },
  };

  if (loading) {
    return <Splash />;
  }
  if (error) {
    return <Text> {JSON.stringify(error)} </Text>;
  }
  if (data) {
    // console.log("User data are", data);
    const user = data.users.slice(-1).pop();
    return (
      <View style={styles.container}>
        <TextInput
          label="Jina la kwanza"
          mode="outlined"
          theme={theme}
          disabled={editStatus}
          style={{ marginBottom: 10 }}
          value={user.firstname}
          onChangeText={(val) => setFirstName(val)}
        />
        <TextInput
          label="Jina la mwisho"
          mode="outlined"
          theme={theme}
          disabled={editStatus}
          style={{ marginBottom: 10 }}
          value={user.lastname}
          onChangeText={(val) => setLastName(val)}
        />
        <TextInput
          label="Namba ya simu"
          mode="outlined"
          theme={theme}
          disabled={editStatus}
          style={{ marginBottom: 10 }}
          value={user.phone}
          onChangeText={(val) => setPhone(val)}
        />
        <TextInput
          label="Barua pepe"
          mode="outlined"
          theme={theme}
          disabled={editStatus}
          style={{ marginBottom: 10 }}
          value={user.email}
          onChangeText={(val) => setPassword(val)}
        />
        <View style={styles.button}>
          <Button
            icon="lead-pencil"
            mode="contained"
            theme={theme}
            onPress={() => editable()}
          >
            BADILISHA
          </Button>
          <Button
            icon="send"
            mode="contained"
            theme={theme}
            onPress={() => editable()}
          >
            TUMA
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    // marginTop: 50,
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    

  },
  signin: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: Colors.blue,
  },
});
