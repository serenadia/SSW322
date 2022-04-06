/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {
  useState,
  Component,
} from 'react';

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';


import {
  Colors,
  Header
} from 'react-native/Libraries/NewAppScreen';

//To select images
//import DocumentPicker from 'react-native-document-picker';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};



const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  //price input code to set up text box
  const PriceInput = () => {
    const [number, onChangeNumber] = React.useState(null);

    return (
      <SafeAreaView>
        <TextInput
          style={StylesForPrice}
          onChangeText={onChangeNumber}
          PriceValue={number}
          placeholder="$0.00"
          keyboardType="numeric"
        />
      </SafeAreaView>
    );
  };

  //Quantity input code to set up text box
    const QuantityInput = () => {
      const [number, onChangeNumber] = React.useState(null);

      return (
        <SafeAreaView>
          <TextInput
            style={StylesForPrice}
            onChangeText={onChangeNumber}
            QuantityValue={number}
            placeholder="0"
            keyboardType="numeric"
          />
        </SafeAreaView>
      );
    };

    //Description input code to set up text box
    const DescInput = () => {
      const [word, onChangeNumber] = React.useState(null);

      return (
        <SafeAreaView>
          <TextInput
            style={StylesForPrice}
            onChangeText={onChangeNumber}
            DescValue={word}
            placeholder="Description"
            keyboardType="default"
          />
        </SafeAreaView>
      );
    };

    //for the file upload
    const [singleFile, setSingleFile] = useState('');

    const selectOneFile = async () => {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images],
        });
      }
      catch (err){
        if (DocumentPicker.isCancel(err)){
          alert('Canceled');
        }
        else{
          alert('Unknown Error');
          throw err;
        }

      }
    };


//actual stuff that gets output
  return (

    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Post">Enter the price:</Section>

          <PriceInput style onChangeText PriceValue placeholder keyboardType></PriceInput>

          <Section>Quantity</Section>

          <QuantityInput style onChangeText QuantityValue placeholder keyboardType></QuantityInput>

          <Section>Item Description</Section>

          <DescInput style onChangeText DescValue placeholder keyboardType></DescInput>

          <Section title>Image(s){"\n"}</Section>

          <Button
          title = "Upload"
          style = {imageButton}
          >

          </Button>

          <TouchableOpacity
          activeOpacity={0.5}
          onPress={selectOneFile}>
          </TouchableOpacity>


        </View>

      </ScrollView>

    </SafeAreaView>
  );
};




const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 25,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },


});

const StylesForPrice = StyleSheet.create({
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
});

//doesn't currently change anything
const imageButton = StyleSheet.create({
    height: 50,
    margin: 50,
    width: 10,
});


export default App;