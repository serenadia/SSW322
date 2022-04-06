import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import StartUpScreen from "./screens/StartUpScreen";
import BrowseScreen from "./screens/BrowseScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="StartUp"
          component={StartUpScreen}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen
          name="Browse"
          component={BrowseScreen}
          options={{
            headerStyle: { backgroundColor: "white" },
            headerTintColor: "#133C55",
            headerShadowVisible: false,
            title: "Browse",
          }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
