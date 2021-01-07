import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorPalette from 'react-native-color-palette';

const App = () => {
  // TODO: 背景色をカラーピッカーから選択した値に変更する
  const [selectedColor, setSelectedColor] = useState('');
  return (
    <View style={[styles.container, { backgroundColor: selectedColor }]}>
      <ColorPalette
        onChange={(value) => setSelectedColor(value)}
        defaultColor={'#C0392B'}
        colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']}
        title={'背景色を変更する'}
      />
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
