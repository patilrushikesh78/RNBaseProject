import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalStyles from '../../styles/globalStyles';
import Strings from '../../constants/strings';


const SplashScreen = ({ navigation }) => {
    useEffect(() => {
      const checkLogin = async () => {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
          navigation.replace('HomeStack');
        } else {
          navigation.replace('Login'); 
        }
      };
      setTimeout(checkLogin, 2000);
    }, [navigation]);
  
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.title}>{Strings.msgs.welcome}</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  };

  export default SplashScreen;