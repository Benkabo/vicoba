import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Colors from '../../Colors'


export default function StartScreen({navigation}) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')} >
        <Text style={styles.text}>INGIA</Text>
        </TouchableOpacity>
        <View style={styles.account}>
        <Text style={{ color: Colors.black, fontSize: 18 }}>Hauna akaunti?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={styles.button1}>TENGENEZA AKAUNTI</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.blue,
    marginHorizontal: 20,
  },
  account: {
    alignItems: "center",
    marginTop: 5,
  },
  button1: {
    color: Colors.blue,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
})
