import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    // console.log('Pressed!');
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonInnerContainer}
        onPress={pressHandler}
        android_ripple={{ color: '#4e0329' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    elevation: 2,
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
