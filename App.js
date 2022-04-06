import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React from "react";
import { View } from "react-native";

import ViewItemScreen from "./app/assets/screens/ViewItemScreen";

export default function App() {
  return <ViewItemScreen/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
