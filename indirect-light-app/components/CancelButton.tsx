import React from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const CancelButton = ({ onPress }) => {
  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          onPress();
        }}
        underlayColor={'white'} // #角丸を設定した場合は、背景色を同じ色にしないとおかしく見える
        activeOpacity={0.7}
      >
        <AntDesign name="close" size={24} color="black" />
      </TouchableHighlight>
    </View>
  );
};

export default CancelButton;
