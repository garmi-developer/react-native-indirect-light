import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ColorPalette from 'react-native-color-palette';
import ColorSelectModal from './components/ColorSelectModal';

const App = () => {
  // TODO: 背景色をカラーピッカーから選択した値に変更する
  const [selectedColor, setSelectedColor] = useState('');
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: selectedColor }]}
    >
      <ColorSelectModal setSelectedColor={setSelectedColor} />
      <StatusBar style="auto" />
    </SafeAreaView>
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
