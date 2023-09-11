import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const ModalComponent = ({ isVisible, toggleModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>Hello! I'm a Modal! sklfjaska
            faskfdjkas; acefjkd keyExtractorsdf
            a f fasjkfas';faskfdjkasaf aljfdajf

          </Text>
          <Button title="Make Payment" onPress={toggleModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  modalContent: {
    justifyContent:'space-between',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    minHeight:150,
    minWidth:'auto'
  },
});

export default ModalComponent;
