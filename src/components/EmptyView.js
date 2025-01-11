import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyView = ({ message = 'No Data Found', textColor = '#555' }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: textColor }]}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 16,
  },
});

export default EmptyView;
