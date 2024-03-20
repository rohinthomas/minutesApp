import React from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const EditProfile = () => {
    const navigation = useNavigation();

    const handleLogOut = async () => {
        try {
            // Clear AsyncStorage
            await AsyncStorage.clear();
            // Navigate to the login screen and clear the stack
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }] // Assuming your login screen is named 'Login'
            });
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Button
                title="LogOut"
                onPress={handleLogOut}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default EditProfile;
