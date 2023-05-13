import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import React from "react";
import CategoryView from "./screens/CategoryView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#74aa9c",
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "white" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoryView}
            options={{
              title: "All CateGories",
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catID = route.params.categoryId;
            //   return {
            //     title: catID,
            //   };
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
