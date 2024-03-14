import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../screen/dashboard';
import EditProfile from '../screen/editProfile';

const Stack = createStackNavigator();

// const screens = {
//     Dashboard: {
//         screen: Dashboard
        
//     },
//     EditProfile:{
//         screen: EditProfile
//     }
// };

const routeStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="dashboard" component={Dashboard} 
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
