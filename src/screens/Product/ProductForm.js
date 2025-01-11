import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { apiHandler } from '../../utils/apiHandler';
import { useDispatch } from 'react-redux';
import apiService from '../../services/ApiService';
import CategoryDropdown from '../../components/CategoryDropdown';
import apiEndpoints from '../../utils/apiEndpoints';
import { showToast } from '../../utils/utils';
import globalStyles from '../../styles/globalStyles';

const ProductForm = () => {

    const route = useRoute();
    const { product, onUpdate } = route.params || {};
    console.log("ProductForm", product?.price);

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [name, setName] = useState(product?.title || '');
    const [price, setPrice] = useState(product?.price?.toString() || '');
    const [categoryId, setCategoryId] = useState(product?.category?.id || '');
    const [description, setDescription] = useState(product?.description || '');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        navigation.setOptions({
            title: product ? 'Edit Product' : 'Add Product',
        });
        if (product) {
            setName(product.title);
            setPrice(product.price);
        }
    }, [product]);

    useEffect(() => {
        const fetchCategories = async () => {
            const { data, error } = await apiHandler(
                dispatch,
                () => apiService.get(apiEndpoints.categories.list),
            );
            if (!error) {
                setCategories(data);
            }
        };

        fetchCategories();
    }, [dispatch]);

    const handleSubmit = async () => {
        if (!name || !price || !categoryId || !description) {
            showToast('error', 'Error', 'All fields are required!');
            return;
        }
        const newProduct = { title: name, price, categoryId, description, images: ['https://placeimg.com/640/480/any?r=0.9178516507833767'] };
        const apiCall = product?.id
            ? () => apiService.put(`/products/${product.id}`, newProduct)
            : () => apiService.post('/products', newProduct);

        const { data, error } = await apiHandler(dispatch, apiCall, product?.id ? 'Product updated!' : 'Product added!');

        if (!error) {
            onUpdate();
            navigation.goBack();
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>Product Name:</Text>
            <TextInput
                style={styles.input}
                placeholder="Product Name"
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.inputTitle}>Price:</Text>
            <TextInput
                style={styles.input}
                placeholder="Price"
                value={price.toString()}
                onChangeText={setPrice}
                keyboardType="numeric"
            />
            <Text style={styles.inputTitle}>Description:</Text>
            <TextInput
                style={styles.input}
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <Text style={styles.inputTitle}>Select Category:</Text>
            <CategoryDropdown
                categories={categories}
                categoryId={categoryId}
                setCategoryId={setCategoryId}
            />
            <TouchableOpacity
                style={[globalStyles.button, { marginTop: 10 }]}
                onPress={handleSubmit}
            >
                <Text style={globalStyles.buttonText}>
                    {product ? 'Update Product' : 'Add Product'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProductForm;
