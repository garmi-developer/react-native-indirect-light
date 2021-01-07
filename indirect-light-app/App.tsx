import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorPalette from 'react-native-color-palette';

const App = () => {
  // TODO: 背景色をカラーピッカーから選択した値に変更する
  return (
    <View style={styles.container}>
      <ColorPalette
        onChange={(value) => alert(`Color selected: ${value}`)}
        defaultColor={'#C0392B'}
        colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
        title={'Uncontrolled Color Palette:'}
      />
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
