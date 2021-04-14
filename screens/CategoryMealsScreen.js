import React from "react";
import { View, StyleSheet, Text, Button, Platform } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = (props) => {
  const categoryId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  return (
    <View style={styles.screen}>
      <Text> {selectedCategory.title} </Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      ></Button>
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "white",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryMealsScreen;
