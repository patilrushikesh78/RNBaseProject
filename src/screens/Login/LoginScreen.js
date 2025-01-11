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

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('john@mail.com');
    const [password, setPassword] = useState('changeme');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if(loading){
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
                showToast('error', 'Error', 'Invalid credentials');
            }
        } catch (error) {
            showToast('error', 'Error', error.response?.data?.detail || 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={globalStyles.title}>Login</Text>
            <TextInput
                style={globalStyles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={globalStyles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity
                style={[globalStyles.button, { marginTop: 10 }]}
                onPress={handleLogin}
            >
                <Text style={globalStyles.buttonText}>
                    {loading ? 'Logging in...' : 'Login'}
                </Text>
            </TouchableOpacity>
            {/* <Button title={loading ? 'Logging in...' : 'Login'} onPress={handleLogin} disabled={loading} /> */}
        </View>
    );
};

export default LoginScreen;
