import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity 
        onPress={() => navigation.navigate("List")}
        style={styles.text}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Image")}
        style={styles.text}>
        <Text>Go to Image Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Counter")}
        style={styles.text}>
        <Text>Go to Counter Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Color")}
        style={styles.text}>
        <Text>Go to Color Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() => navigation.navigate("Square")}
        style={styles.text}>
        <Text>Go to Square Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    paddingHorizontal: 10,
    paddingVertical: 15
  }
});

export default HomeScreen;
