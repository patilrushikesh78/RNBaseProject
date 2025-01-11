import React, { useState, useEffect } from 'react';
import { View, TextInput, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { apiHandler } from '../../utils/apiHandler';
import { useDispatch } from 'react-redux';
import apiService from '../../services/ApiService';
import CategoryDropdown from '../../components/CategoryDropdown';
import apiEndpoints from '../../utils/apiEndpoints';
import { showToast } from '../../utils/utils';
import globalStyles from '../../styles/globalStyles';
import CustomButton from '../../components/CustomButton';
import Strings from '../../constants/strings';

const ProductForm = () => {
    const route = useRoute();
    const { product, onUpdate } = route.params || {};
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [name, setName] = useState(product?.title || '');
    const [price, setPrice] = useState(product?.price?.toString() || '');
    const [categoryId, setCategoryId] = useState(product?.category?.id || '');
    const [description, setDescription] = useState(product?.description || '');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        navigation.setOptions({
            title: product ? Strings.lables.editProduct : Strings.lables.addProduct,
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
            showToast('error', 'Error', Strings.msgs.allFieldRequired);
            return;
        }
        const newProduct = { title: name, price, categoryId, description, images: ['https://placeimg.com/640/480/any?r=0.9178516507833767'] };
        const apiCall = product?.id
            ? () => apiService.put(apiEndpoints.products.update(product.id), newProduct)
            : () => apiService.post(apiEndpoints.products.create, newProduct);

        const { data, error } = await apiHandler(dispatch, apiCall, product?.id ? Strings.msgs.productUpdatedSuccessfully : Strings.msgs.productAddedSuccessfully);

        if (!error) {
            onUpdate();
            navigation.goBack();
        }

    };

    return (
        <View style={styles.container}>
            <Text style={styles.inputTitle}>{Strings.lables.productName}</Text>
            <TextInput
                style={styles.input}
                placeholder={Strings.lables.productName}
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.inputTitle}>{Strings.lables.price}</Text>
            <TextInput
                style={styles.input}
                placeholder={Strings.lables.price}
                value={price.toString()}
                onChangeText={setPrice}
                keyboardType="numeric"
            />
            <Text style={styles.inputTitle}>{Strings.lables.desc}</Text>
            <TextInput
                style={styles.input}
                placeholder={Strings.lables.desc}
                value={description}
                onChangeText={setDescription}
            />
            <Text style={styles.inputTitle}>{Strings.lables.selectCategory}</Text>
            <CategoryDropdown
                categories={categories}
                categoryId={categoryId}
                setCategoryId={setCategoryId}
            />
            <CustomButton onPress={handleSubmit} style={[globalStyles.button, { marginTop: 10 }]}
                text={product ? Strings.lables.update : Strings.lables.add} textStyle={globalStyles.buttonText} />
        </View>
    );
};

export default ProductForm;
