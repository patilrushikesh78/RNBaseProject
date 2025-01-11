import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ style, onPress, text, textStyle }) => {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      <Text style={[textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
