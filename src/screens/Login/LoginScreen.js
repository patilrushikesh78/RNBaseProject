import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiService from '../../services/ApiService';
import styles from './styles';
import globalStyles from '../../styles/globalStyles';
import apiEndpoints from '../../utils/apiEndpoints';
import { showToast } from '../../utils/utils';
import { validateLoginData } from '../../utils/validation';
import CustomButton from '../../components/CustomButton';
import Strings from '../../constants/strings';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('john@mail.com');
    const [password, setPassword] = useState('changeme');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (loading) {
            return
        }
        setLoading(true);
        const validationError = validateLoginData(email, password);
        if (validationError) {
            showToast('error', 'Error', validationError);
            setLoading(false);
            return;
        }

        try {
            const response = await apiService.post(apiEndpoints.auth.login, { email, password });
            if (response.data.access_token) {
                const token = response.data.access_token;
                await AsyncStorage.setItem('accessToken', token);
                navigation.replace('HomeStack');
            } else {
                showToast('error', 'Error', Strings.msgs.invalidCreds);
            }
        } catch (error) {
            showToast('error', 'Error', error.response?.data?.detail || Strings.msgs.somethingWentWrong);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={globalStyles.title}>{Strings.lables.login}</Text>
            <TextInput
                style={globalStyles.input}
                placeholder={Strings.lables.email}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={globalStyles.input}
                placeholder={Strings.lables.password}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <CustomButton onPress={handleLogin} style={[globalStyles.button, { marginTop: 10 }]}
                text={loading ? Strings.lables.loggingIn : Strings.lables.login} textStyle={globalStyles.buttonText} isLoading={loading} />

        </View>
    );
};

export default LoginScreen;
