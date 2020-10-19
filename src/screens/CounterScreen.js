import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CounterScreen = () => {

  const [counter, setCounter] = useState(0);

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setCounter(counter + 1)}>
        <Text>Increase</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setCounter(counter - 1)}>
        <Text>Decrease</Text>
      </TouchableOpacity>

      <Text style={styles.counterStyle}>{counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    fontSize: 15
  },
  counterStyle: {
    marginTop: 25,
    fontSize: 25
  }
});

export default CounterScreen;
