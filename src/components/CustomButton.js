import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

const CustomButton = ({ style, onPress, text, textStyle, isLoading = false }) => {
  return (
    <TouchableOpacity style={[style]} onPress={onPress} disabled={isLoading}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {isLoading ? (
          <ActivityIndicator size="small" color="white" style={{ marginRight: 10 }} />
        ) : null}
        
        <Text style={[textStyle]}>{isLoading ? '' : text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
