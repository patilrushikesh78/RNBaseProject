import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Strings from '../../constants/strings';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

const ProductItem = ({ item, handleEditProduct, handleDeleteProduct }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.categoryText}>
        {Strings.lables.category} {item.category.name}
      </Text>
      <Text style={styles.priceText}>
        {Strings.lables.price} {item.price.toFixed(2)}
      </Text>
      <View style={[styles.buttonContainer, { marginTop: 5 }]}>
        <CustomButton
          onPress={() => handleEditProduct(item)}
          style={styles.button}
          text={Strings.lables.edit}
          textStyle={styles.buttonText}
        />
        <CustomButton
          onPress={() => handleDeleteProduct(item.id)}
          style={styles.button}
          text={Strings.lables.delete}
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

export default ProductItem;
