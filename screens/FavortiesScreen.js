import React from "react";
import { View, StyleSheet, Text } from "react-native";

const FavortiesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text> Favorties Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default FavortiesScreen;
