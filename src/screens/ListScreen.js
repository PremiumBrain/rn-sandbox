import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {

  const beers = [
    { id: 1, name: "Tuborg Gold" },
    { id: 2, name: "Tuborg Amber" },
    { id: 3, name: "Tuborg Red" },
    { id: 4, name: "Efes" },
    { id: 5, name: "Efes Extra" },
    { id: 6, name: "Efes Fıçı" },
    { id: 7, name: "Amsterdam" },
    { id: 8, name: "Miller" },
    { id: 9, name: "Heineken" },
  ];

  let renderListItem = (element) => {
    return <Text style={styles.listItem}>{element.item.name}</Text>
  };

  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={beers}
      renderItem={(element) => renderListItem(element)}
      keyExtractor={(item) => item.id.toString()} />
  );
};

const styles = StyleSheet.create({
  listItem: {
    paddingVertical: 15,
    paddingHorizontal: 10
  }
});

export default ListScreen;