import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from './../redux/userSlice';

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.user.name);

  return (
    <View>
      <Text>Profile Screen</Text>
      <Text>Name: {name}</Text>
      <Button title="Change Name" onPress={() => dispatch(setName('John Doe'))} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ProfileScreen;
