import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { login } from '../services/apiServices';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const navigation = useNavigation();
    const handleSignIn = () => {
        setIsButtonDisabled(true);
        setErrorMessages('');

        login({ 
            username: username,
            password: password,
            role:"0" 
        }).then((response)=>{
                
                AsyncStorage.setItem("accessToken:", response?.data?.access);
                AsyncStorage.setItem("refreshToken:", response?.data?.refresh);

                if (response?.data?.user_role === 0) {
                    navigation.replace('Dashboard')
                } else {
                    localStorage.clear();
                    navigation.navigate('Login')
                }
            })
            .catch(error => {
                console.log("Error:", error);
                setIsButtonDisabled(false);
                setErrorMessages(error?.response?.data?.message ?? "Login failed");
            });
    };

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.signinText}>Sign In to Continue</Text>
                </View>
                <View>
                    <TextInput
                        mode="outlined"
                        label="Username"
                        placeholder="username"
                        style={styles.username}
                        value={username}
                        onChangeText={text => setUsername(text)}
                    />
                </View>
                <View style={styles.passwordContainer}>
                    <View style={styles.passwordInput}>
                        <TextInput
                            mode="outlined"
                            label="Password"
                            placeholder="password"
                            secureTextEntry={!showPassword} // Toggles password visibility
                            style={styles.password}
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                            <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Button
                        mode="contained"
                        style={styles.loginButton}
                        onPress={handleSignIn}
                        disabled={isButtonDisabled}
                    >
                        Sign In
                    </Button>
                </View>
                {errorMessages ? (
                    <View>
                        <Text style={styles.errorText}>{errorMessages}</Text>
                    </View>
                ) : null}
                <View>
                    <Button
                        mode="text"
                        style={styles.forgotButton}
                        onPress={() => console.log('Pressed')}
                    >
                        Forgot Password ?
                    </Button>
                </View>
            </View>
            <View style={styles.registerContainer}>
                <Text>Don't have an account?</Text>
                <Button
                    mode="text"
                    style={styles.registerButton}
                    onPress={() => navigation.navigate('Register')}
                >
                    Register
                </Button>
            </View>
            {/* <GoogleSignIn/> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: '50%',
        alignItems: 'center',
    },
    signinText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    username: {
        marginTop: 20,
        width: 300,
    },
    passwordContainer: {
        flexDirection: 'row',
    },
    passwordInput: {
        flexDirection: 'row',
        alignItems: 'center', // Align items vertically
        width: 300,
    },
    password: {
        flex: 1, // Take remaining space
        marginTop: 20,
    },
    eyeIcon: {
        position: 'absolute', // Position the eye icon absolutely
        right: 10,
        top: 40
    },
    loginButton: {
        width: 300,
        marginTop: 40
    },
    errorText: {
        color: 'red',
        marginTop: 10
    },
    registerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Login;
