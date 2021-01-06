import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  // TODO: 背景色をカラーピッカーから選択した値に変更する
  return (
    <View style={styles.container}>
      <Text>茶色にへんこう</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b4513',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
