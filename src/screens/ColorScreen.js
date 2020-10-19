import React, { useState } from 'react';
import { Text, FlatList, TouchableOpacity, View, StyleSheet } from 'react-native';

const ColorScreen = () => {

  const [colors, setColors] = useState([]);

  return (
    <View>
      <TouchableOpacity onPress={() => {
        setColors([...colors, randomRgb()]);
      }}>
        <Text>
          Add Color
        </Text>
      </TouchableOpacity>
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ width: 100, height: 100, backgroundColor: item }}></View>
          );
        }} />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;