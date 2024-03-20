import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screen/dashboard';
import EditProfile from '../screen/editProfile';
import Login from '../screen/login';

const Stack = createStackNavigator();
const routeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} 
           options={{
                headerStyle: {
                    backgroundColor: '#F2F2F2', // Off-white color
                },
                headerTintColor: '#000', // Black color for text
                headerShadowVisible:false,
           }}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} 
           options={{
                headerStyle: {
                    backgroundColor: '#F2F2F2', // Off-white color
                },
                headerTintColor: '#000', // Black color for text
                headerShadowVisible:false,
           }}
        />
        <Stack.Screen name="Profile" component={EditProfile} 
           options={{
                headerStyle: {
                    backgroundColor: '#F2F2F2', // Off-white color
                },
                headerTintColor: '#000', // Black color for text
                headerShadowVisible:false,
           }}
        />

    </Stack.Navigator>
);

export default routeStack;
