import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';
import { useSelector } from 'react-redux';

const AppLoader = () => {
  const isLoading = useSelector((state) => state.loader.isLoading); 

  return (
    <Modal
      visible={isLoading}
      transparent
      animationType="fade"
      onRequestClose={() => {}}
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
});

export default AppLoader;
