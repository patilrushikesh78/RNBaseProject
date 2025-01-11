import React from 'react';
import { Text } from 'react-native';
import globalStyles from '../styles/globalStyles';

const CustomText = ({ children, style, ...props }) => {
  return (
    <Text style={[globalStyles.title, style]} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
