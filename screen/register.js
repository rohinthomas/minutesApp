import {React,useState} from'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput,Button } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { useForm, Controller } from 'react-hook-form';
const Register=()=>{
    const [showPassword, setShowPassword] = useState(false);
    const {control,handleSubmit,formState: { errors }}=useForm()
    
    const onSubmit = (data) => {
        console.log(data);
      };
    
    return(
        <SafeAreaView>
            <View >
                <View style={styles.container}>
                    <View>
                        <Text style={styles.createAccountText}>Create an account✨</Text>
                    </View>
                    <View>
                        <Text style={styles.welcomeText}>Welcome! Please enter your details</Text>
                    </View>
                </View>
                <View style={styles.registerFormContainer}>
                    <View style={styles.name}>
                        <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                control={control}
                                mode="outlined"
                                label="First name"
                                placeholder="Enter your first name"
                                right={<TextInput.Affix text="/100" />}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                error={!!errors.firstName}
                            />
                            )}
                            name="firstName"
                            rules={{ required: 'Enter your first name' }}
                            defaultValue=""
                        />
                        {errors.firstName && (
                            <Text style={styles.errorMessageContainer}>{errors?.firstName.message}</Text>
                        )}
                    </View>
                    <View style={styles.lastName}>
                    <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                control={control}
                                mode="outlined"
                                label="Last name"
                                placeholder="Enter your last name"
                                right={<TextInput.Affix text="/100" />}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                error={!!errors.lastName}
                            />
                            )}
                            name="lastName"
                            rules={{ required: 'Enter your last name' }}
                            defaultValue=""
                        />
                        {errors.lastName && (
                            <Text style={styles.errorMessageContainer}>{errors?.lastName.message}</Text>
                        )}  
                    </View>
                    <View style={styles.email}>
                    <Controller
                            control={control}
                            render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                control={control}
                                mode="outlined"
                                label="Email"
                                placeholder="Enter your email"
                                right={<TextInput.Affix text="/100" />}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                error={!!errors.email}
                            />
                            )}
                            name="email"
                            rules={{ required: 'Enter your email' }}
                            defaultValue=""
                        />
                        {errors.email && (
                            <Text style={styles.errorMessageContainer}>{errors?.email.message}</Text>
                        )}  
                    </View>
                    <View>
                        <View style={styles.passwordContainer}>
                            <View style={styles.passwordInput}>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    control={control}                            
                                    mode="outlined"
                                    label="Password"
                                    placeholder="password"
                                    secureTextEntry={!showPassword} // Toggles password visibility
                                    style={styles.password}
                                    onChangeText={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    error={!!errors.password}
                                />
                                )}
                                name="password"
                                rules={{ required: 'Enter your password' }}
                                defaultValue=""
                            />
                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                                    <MaterialIcons name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        {errors.password && (
                            <Text style={styles.errorMessageContainer}>{errors?.password.message}</Text>
                        )} 
                    </View>  
                    <View>
                        <Button
                            mode="contained"
                            style={styles.signupButton}
                            onPress={handleSubmit(onSubmit)} 
                            title="Submit"
                            // disabled={isButtonDisabled}
                        >
                            Sign Up
                        </Button>
                    </View>
                </View>
            </View>    
        </SafeAreaView>
        
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center'
    },
    createAccountText:{
        fontWeight:'bold',
        fontSize:25,
        // marginTop:10,
    },
    welcomeText:{
        marginTop:5,
        marginRight:15
    },
    registerFormContainer:{
        alignItems:'center'
    },
    name:{
        width:300,
        marginTop: 20,
    },
    lastName:{
        width:300,
        marginTop: 20,
    },
    email:{
        width:300,
        marginTop: 20,
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
    signupButton:{
        marginTop: 20,
        width:300,
    },
    errorMessageContainer:{
        color:'red',
        paddingBottom:0
    }
})

export default Register