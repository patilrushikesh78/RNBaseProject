import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';
import apiService from '../../services/ApiService';
import { apiHandler } from '../../utils/apiHandler';
import EmptyView from '../../components/EmptyView';
import apiEndpoints from '../../utils/apiEndpoints';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, error } = await apiHandler(
      dispatch,
      () => apiService.get(apiEndpoints.products.list),
      ''
    );
    if (!error) {
      setData(data.reverse());
    }
  };

  const handleEditProduct = (product) => {
    navigation.navigate('ProductForm', { product, onUpdate: fetchData });
  };

  const handleAddProduct = () => {
    navigation.navigate('ProductForm', { onUpdate: fetchData });
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('accessToken');

      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    Alert.alert(
      "Delete Product",
      "Are you sure you want to delete this product?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete", onPress: async () => {
            // Make the delete API call
            const { error } = await apiHandler(
              dispatch,
              () => apiService.delete(`${apiEndpoints.products.list}/${productId}`),
              'Product deleted successfully!'
            );

            if (!error) {
              // Remove the deleted product from the local state
              setData((prevData) => prevData.filter(item => item.id !== productId));
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer,{marginTop:0}]}>
        <TouchableOpacity onPress={handleAddProduct} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      {data.length > 0 ?
        <FlatList
          style={{ marginTop: 10 }}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.categoryText}>Category : {item.category.name}</Text>
              <Text style={styles.priceText}>Price : ${item.price.toFixed(2)}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => handleEditProduct(item)}
                >
                  <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteProduct(item.id)}
                >
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        /> : <EmptyView />
      }
    </View>
  );
};

export default HomeScreen;
