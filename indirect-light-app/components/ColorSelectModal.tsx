import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Alert,
  TouchableHighlight,
  Button,
} from 'react-native';
import CancelButton from './CancelButton';
import ColorPalette from 'react-native-color-palette';

const ColorSelectModal = ({ setSelectedColor }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Button
        title="Color Select"
        color="blue"
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ position: 'absolute', left: 10, top: 10 }}>
              <CancelButton onPress={() => setModalVisible(!modalVisible)} />
            </View>
            <ColorPalette
              onChange={(value) => setSelectedColor(value)}
              defaultColor={'#C0392B'}
              colors={['#C0392B', '#E74C3C', '#9B59B6', 'green', '#2980B9']}
              title={'背景色を変更する'}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ColorSelectModal;
