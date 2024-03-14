import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the useNavigation hook

const Profile = () => {
    const navigation = useNavigation(); // Use the useNavigation hook to get the navigation object

    const editProfile = () => {
        navigation.navigate('Profile');
    }

    return (
        <TouchableOpacity style={styles.profileLocation} onPress={editProfile}>
            <Image source={require('../assets/images/rohin.jpeg')} style={styles.image} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 60, // Adjust the width and height as needed
        height: 60,
        borderRadius: 50,
    },
    profileLocation: {
        marginLeft: "50%"
    }
});

export default Profile;
