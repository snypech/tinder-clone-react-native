import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import useAuth from './hooks/useAuth';
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ModalScreen from './screens/ModalScreen';


const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const {user}=useAuth();
    return (
       <Stack.Navigator
       screenOptions={{
           headerShown:false
       }}
       >
           {user? (
            <>
            <Stack.Group>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="ChatScreen" component={ChatScreen}/>
            </Stack.Group>
            <Stack.Group screenOptions={{presentation:'modal'}}>
                <Stack.Screen name='Modal' component={ModalScreen}/>
            </Stack.Group>
           </>
            ):(
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        )
        }
        </Stack.Navigator>
    )
}

export default StackNavigator
