import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const FindScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>FindScreen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked')} />
    </View>
  );
};

export default FindScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fcbbc',
  },
});
