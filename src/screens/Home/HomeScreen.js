import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styles';
import apiService from '../../services/ApiService';
import { apiHandler } from '../../utils/apiHandler';
import EmptyView from '../../components/EmptyView';
import apiEndpoints from '../../utils/apiEndpoints';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton';
import Strings from '../../constants/strings';
import ProductItem from './ProductItem';
import { showToast } from '../../utils/utils';

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
      showToast('error', 'Error', 'Failed to logout.');
    }
  };

  const handleDeleteProduct = async (productId) => {
    Alert.alert(
      Strings.msgs.deleteProduct,
      Strings.msgs.sureWantToDeleteProduct,
      [
        {
          text: Strings.lables.cancel,
          style: "cancel"
        },
        {
          text: Strings.lables.delete, onPress: async () => {
            const { error } = await apiHandler(
              dispatch,
              () => apiService.delete(apiEndpoints.products.delete(productId)),
              Strings.msgs.productDeletedSuccessfully
            );

            if (!error) {
              setData((prevData) => prevData.filter(item => item.id !== productId));
            }
          }
        }
      ]
    );
  };

  const renderProductItem = ({ item }) => {
    return (
      <ProductItem
        item={item}
        handleEditProduct={handleEditProduct}
        handleDeleteProduct={handleDeleteProduct}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, { marginTop: 0 }]}>
        <CustomButton onPress={handleAddProduct} style={styles.button} text={Strings.lables.add} textStyle={styles.buttonText} />
        <CustomButton onPress={handleLogout} style={styles.button} text={Strings.lables.logout} textStyle={styles.buttonText} />
      </View>

      {data.length > 0 ?
        <FlatList
          style={{ marginTop: 10 }}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProductItem}

        /> : <EmptyView />
      }
    </View>
  );
};

export default HomeScreen;
