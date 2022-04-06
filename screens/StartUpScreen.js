import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from 'react-native';
//import MyButton from '../components/MyButton'

export default function StartUpScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 40}}>Welcome to Exchange4Students!</Text>
            <StatusBar style="auto" />
            <View style={{height: Dimensions.get('screen').width * 0.6}}></View>
            <View style={styles.fixToText}>
                <MyButton type="secondary" text="Browse" size="large" onPressFn={() => navigation.navigate("Browse")}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fixToText: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});